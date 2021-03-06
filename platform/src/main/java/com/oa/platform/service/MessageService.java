package com.oa.platform.service;

import com.github.pagehelper.PageInfo;
import com.oa.platform.entity.Message;
import com.oa.platform.entity.MessageRoom;
import com.oa.platform.entity.UserMessageStat;

import java.util.List;

/**
 * 消息
 * @author jianbo.feng
 * @create 2020/04/15
 */
public interface MessageService extends BaseService<Message, String> {

    void insertMessageRoom(MessageRoom messageRoom);

    void insertUserMessageStat(UserMessageStat userMessageStat);

    void updateMessageRoom(MessageRoom messageRoom);

    void updateUserMessageStat(UserMessageStat userMessageStat);

    void deleteMessageRoom(MessageRoom messageRoom);

    void deleteUserMessageStat(UserMessageStat userMessageStat);

    MessageRoom findMessageRoomById(String roomId);

    UserMessageStat findUserMessageStatById(String recordId);

    List<MessageRoom> findMessageRoom(MessageRoom messageRoom);

    List<UserMessageStat> findUserMessageStat(UserMessageStat userMessageStat);

    PageInfo<MessageRoom> searchMessageRoom(MessageRoom messageRoom, int pageNum, int pageSize);

    PageInfo<UserMessageStat> searchUserMessageStat(UserMessageStat userMessageStat, int pageNum, int pageSize);
}
