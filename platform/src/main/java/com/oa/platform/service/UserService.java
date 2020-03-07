package com.oa.platform.service;

import com.github.pagehelper.PageInfo;
import com.oa.platform.entity.Role;
import com.oa.platform.entity.User;
import com.oa.platform.entity.UserDtl;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;
import java.util.Map;

/**
 * 用户
 * @author Feng
 * @date 2018/08/23
 */
public interface UserService extends BaseService<User,String>, UserDetailsService {

    /**
     * 根据用户ID查询用户详细信息
     * @param userId 用户id
     * @return
     */
    UserDtl findDetailByUserId(String userId);

    /**
     * 根据用户id列表获得用户详情
     * @param userIds
     * @return
     */
    List<UserDtl> findDetailByUserIds(List<String> userIds);

    PageInfo<User> findAllUser(int pageNum, int pageSize);

    /**
     * 保存用户详细信息
     * @param userDtl 用户详细信息
     */
    void saveUserDtl(UserDtl userDtl);

    /**
     * 更新用户详细信息
     * @param userDtl
     */
    void updateUserDtl(UserDtl userDtl);

    /**
     * 根据用户名和密码查询用户信息
     * @param userName 用户名
     * @param userPwd 密码
     * @return
     */
    User findUserByNameAndPwd(String userName, String userPwd);

    /**
     * 根据用户名(精确)查找用户信息
     * @param userName 用户名(若为空或空格则不进行查询)
     * @return
     */
    User findUserByName(String userName);

    /**
     * 根据用户id查询角色信息
     * @param userId 用户id
     * @return
     */
    List<Role> findRoleByUserId(String userId);

    /**
     * 根据用户id列表查询用户信息，并封装为key-value(value: 用户信息)
     * @param userIds 用户id列表
     * @return
     */
    Map<String, User> findByUserIds(List<String> userIds);

    /**
     * 根据用户id列表查询用户信息，并封装为key-value(value: 用户详情)
     * @param userIds 用户id列表
     * @return
     */
    Map<String, UserDtl> findDtlsByUserIds(List<String> userIds);
}
