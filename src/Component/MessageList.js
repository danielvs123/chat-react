import React, { Component } from 'react';
import MessageElement from './MessageElement';
import './css/ChatList.css';

class MessageList extends Component {
    render() {
        return (
            <div id="messageList">
                <MessageElement/>
                <MessageElement/>
                <MessageElement/>
                <MessageElement/>
                <MessageElement/>
                <MessageElement/>
                <MessageElement/>
                <MessageElement/>
            </div>
        );
    }
}

export default MessageList;
