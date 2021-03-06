package com.oa.platform.biz;

import com.oa.platform.aspect.LogRecordAdvice;
import com.oa.platform.common.Constants;
import com.oa.platform.common.FileType;
import com.oa.platform.util.FileUtil;
import com.oa.platform.util.StringUtil;
import lombok.extern.slf4j.Slf4j;

import org.apache.tika.Tika;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * 文件上传下载
 * @author feng
 * @date 2019/10/20
 */
@Component
public class FileBiz extends BaseBiz {
    private final Logger log = LoggerFactory.getLogger(FileBiz.class);

    /**
     * 上传文件保存目录
     */
    @Value(value="${upload.save-dir}")
    private String saveDir;

    /**
     * 单文件上传
     * @param file 文件
     * @param request HttpServlet请求对象
     * @return
     */
    public Map<String, Object> upload(MultipartFile file, HttpServletRequest request) {

        try {
            //姓名
            String name = getParameter(request,"name");
            System.err.println("姓名：" + name);

            System.err.println(file.getSize());

            System.err.println("saveDir:::"+saveDir);

            // 类型
            String type = getParameter(request, "type", "other");
            System.err.println("类型： " + type);

            // 文件名
            String fileName = file.getOriginalFilename();
            System.err.println("文件名： " + fileName);

            // 过滤从MacOS获取的异常文件名: 如: ":Users:baby:Downloads:哈哈22.jpg"
            int _index = fileName.lastIndexOf(":");
            if (_index >= 0) {
                fileName = fileName.substring(_index);
            }

            // 文件后缀
            String suffixName = fileName.substring(fileName.lastIndexOf("."));
            System.err.println("文件后缀名： " + suffixName);

            // 重新生成唯一文件名，用于存储数据库
            String newFileName = UUID.randomUUID().toString()+suffixName;
            System.err.println("新的文件名： " + newFileName);

            //创建文件
            String parent = saveDir + File.separator + type;
            File dest = FileUtil.createFile(parent, newFileName);


            Map<String,Object> map = new HashMap<>();
            map.put("filePath", dest.getAbsolutePath());
            map.put("name", name);
            map.put("size", file.getSize());
            map.put("fileName", fileName);
            map.put("newFileName", newFileName);
            map.put("destName", File.separator + type + File.separator + newFileName);
            File parentFile = dest.getParentFile();
            if (!parentFile.exists() && !parentFile.isDirectory()) {
                parentFile.mkdirs();
            }
            file.transferTo(dest);

            String content = "";
            // 是否解析文件(0, 不解析;1, 解析)
            String parse = StringUtil.trim(request.getParameter("parse"), "0");
            if ("1".equals(parse)) {
                String _fileName = fileName.toLowerCase(Constants.LOCALE_DEFAULT);
                if (_fileName.endsWith(FileType.PDF.getFormat()) ||
                        _fileName.endsWith(FileType.DOC.getFormat()) ||
                        _fileName.endsWith(FileType.DOCX.getFormat())) {
                    try {
                        Tika tika = new Tika();
                        content = tika.parseToString(dest);
                    } catch (Exception e) {
                        System.err.println("文件解析失败：" + fileName);
                        e.printStackTrace();
                    }
                }
            }
            map.put("content", content);
            ret = this.getSuccessVo("", map);
        } catch (IOException e) {
            ret = this.getErrorVo();
            e.printStackTrace();
        }
        return ret;
    }

    /**
     * 多文件上传
     * @param request HttpServlet请求对象
     * @return
     */
    public Map<String, Object> batchUpload(HttpServletRequest request) {
        try {
            String type = getParameter(request, "type", "other");

            List<MultipartFile> fileList = ((MultipartHttpServletRequest)request).getFiles("file");
            /*String contextPath = request.getSession().getServletContext().getRealPath("/") + "\\uploads\\";
            System.err.println("contextPath:"+contextPath);

            contextPath = saveDir;

            File template = new File(contextPath);
            if(!template.exists()) {
                template.mkdir();
            }*/
            Map<String, Object> data = new HashMap<>();
            if(fileList != null && !fileList.isEmpty()) {
                int len = fileList.size();
                for(int i=0;i<len;i++) {
                    MultipartFile file = fileList.get(i);
                    String fileName = file.getOriginalFilename();
                    String suffixName = fileName.substring(fileName.lastIndexOf("."));
                    String newFileName = UUID.randomUUID().toString()+suffixName;

                    String parent = saveDir + File.separator + type;
                    File dest = FileUtil.createFile(parent, newFileName);

                    Map<String,Object> map = new HashMap<>();
                    map.put("size", file.getSize());
                    map.put("contentType", file.getContentType());
                    map.put("destName", File.separator + type + File.separator + newFileName);
                    map.put("fileName", fileName);
                    map.put("newFileName", newFileName);
                    File parentFile = dest.getParentFile();
                    if (!parentFile.exists() && !parentFile.isDirectory()) {
                        parentFile.mkdirs();
                    }
                    file.transferTo(dest);
                    data.put(String.valueOf(i), map);
                }
            }
            ret = this.getSuccessVo("", data);
        }
        catch(IOException e) {
            ret = this.getErrorVo();
            e.printStackTrace();
        }

        return ret;
    }

    /**
     * 文件下载
     * @param response 响应对象
     * @param fileName 文件名(若为空，则不下载)
     */
    public void dl(HttpServletResponse response, String fileName) {
        dl(response, saveDir, "", fileName, fileName);
    }

    /**
     * 文件下载
     * @param response 响应对象
     * @param type 文件所属类型(如：res)
     * @param fileName 文件名(若为空，则不下载)
     * @param viewName 显示名称(若为空，则设置为fileName)
     */
    public void dl(HttpServletResponse response, String type, String fileName, String viewName) {
        dl(response, saveDir, type, fileName, viewName);
    }

    /**
     * 文件下载
     * @param response 响应对象
     * @param filePath 文件所在目录(默认为系统设置：saveDir)
     * @param type 文件所属类型(如：res)
     * @param fileRealName 文件真实名称(若为空，则不下载)
     * @param viewName 显示名称(若为空，则设置为fileRealName)
     */
    public void dl(HttpServletResponse response, String filePath, String type, String fileRealName, String viewName) {
        fileRealName = StringUtil.trim(fileRealName);
        if (!"".equals(fileRealName)) {
            BufferedInputStream bis = null;
            OutputStream os = null;
            try {
                filePath = StringUtil.trim(filePath, saveDir);
                type = StringUtil.trim(type);
                if (!"".equals(type)) {
                    filePath = filePath + File.separator + type;
                }
                System.err.println("fileRealName:" + fileRealName);
                viewName = StringUtil.trim(viewName, fileRealName);

                File file = FileUtil.createFile(filePath, fileRealName);
                byte[] buff = new byte[1024];
                response.setCharacterEncoding(Constants.DEFAULT_CHARSET);
                response.setContentType("text/html;charset=" + Constants.DEFAULT_CHARSET);
//            response.setContentType("multipart/form-data");
                // 设置被下载而不是被打开
                response.setContentType("application/gorce-download");
                // 设置被第三方工具打开,设置下载的文件名
                response.setHeader("Content-Disposition", "attachment; fileName="
                        + viewName +";filename*=" + Constants.DEFAULT_CHARSET + "''"
                        + URLEncoder.encode(viewName, Constants.DEFAULT_CHARSET));

                os = response.getOutputStream();
                bis = new BufferedInputStream(new FileInputStream(file));

                int i = bis.read(buff);
                while (i != -1) {
                    os.write(buff,0,buff.length);
                    os.flush();
                    i = bis.read(buff);
                }
            }
            catch(IOException ioe) {
                //ioe.printStackTrace();
                log.error(ioe.getMessage());
            }
            finally {
                if (os != null) {
                    try {
                        os.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
                if (bis != null) {
                    try {
                        bis.close();
                    }
                    catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }
}
