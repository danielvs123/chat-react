import React, { Component } from 'react';
import './css/ChatPage.css';

class ChatPage extends Component {
    render() {
        return (
            <div id="chatPage">
                <div id="chatPage-username">DanielVS</div>
                <textarea id="messageInput" />
            </div>
        );
    }
}

export default ChatPage;
