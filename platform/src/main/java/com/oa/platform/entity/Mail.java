package com.oa.platform.entity;
/**
 * 邮件实体类
 * @author 俞灶森
 *
 */
public class Mail {
	//发送人
	private String form;
	//接收人
	private String[] sendTo;
	//抄送人
	private String[] copyTo;
	//邮件主题
	private String subject;
	//邮件内容
	private String content;
	//附件地址
	private String fileUrl;
	public String getForm() {
		return form;
	}
	public void setForm(String form) {
		this.form = form;
	}
	public String[] getSendTo() {
		return sendTo;
	}
	public void setSendTo(String[] sendTo) {
		this.sendTo = sendTo;
	}
	public String[] getCopyTo() {
		return copyTo;
	}
	public void setCopyTo(String[] copyTo) {
		this.copyTo = copyTo;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getFileUrl() {
		return fileUrl;
	}
	public void setFileUrl(String fileUrl) {
		this.fileUrl = fileUrl;
	}
	
}
