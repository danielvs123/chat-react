import React, { Component } from 'react';
import SearchBox from './SearchBox';
import MessageList from './MessageList';
import './css/ChatList.css';
import './css/Common.css';

class ChatList extends Component {

    transferMsg(uid) {
        this.props.transferMsg(uid);
    }

    render() {
        return (
            <div id="chatList-bar">
                {/*搜索窗口*/}
                <SearchBox/>
                {/*预览消息框*/}
                <MessageList  transferMsg = {msg => this.transferMsg(msg)}/>
            </div>
        );
    }
}

export default ChatList;
