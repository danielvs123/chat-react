import React, { Component } from 'react';
import './css/ChatPage.css';

class ChatPage extends Component {
    render() {
        let dom = "";
        if (this.props.user===""){
            return (
                <div id="chatPage">
                </div>
            );
        }else{
            return (
                <div id="chatPage">
                    <div id="chatPage-username">{this.props.user}</div>
                    <textarea id="messageInput" />
                </div>
            );
        }
    }
}

export default ChatPage;
