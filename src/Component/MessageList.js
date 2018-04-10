import React, { Component } from 'react';
import MessageElement from './MessageElement';
import './css/ChatList.css';

class MessageList extends Component {
    transferMsg(uid) {
        this.props.transferMsg(uid);
    }

    render() {
        return (
            <div id="messageList">
                <MessageElement transferMsg = {msg => this.transferMsg(msg)}/>
            </div>
        );
    }
}

export default MessageList;
