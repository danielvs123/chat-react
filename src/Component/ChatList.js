import React, { Component } from 'react';
import SearchBox from './SearchBox';
import MessageList from './MessageList';
import './css/ChatList.css';
import './css/Common.css';

class ChatList extends Component {
    render() {
        return (
            <div id="chatList-bar">
                <SearchBox/>
                <MessageList/>
            </div>
        );
    }
}

export default ChatList;
