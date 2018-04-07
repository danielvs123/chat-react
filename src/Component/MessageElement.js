import React, { Component } from 'react';
import './css/ChatList.css';

class MessageElement extends Component {
    render() {
        return (
            <div className="messageElement">
                <img src="https://shuaiyixu.com/img/2.jpg" className="userAvatar" />
                <div className="userChatPreview">
                    <div className="chatListTitle">DanielVS</div>
                    <div className="chatListLastUpdate">hello</div>
                </div>
                <div className="chatTimeBox">
                    <div className="chatListTime">12:23</div>
                </div>
            </div>
        );
    }
}

export default MessageElement;
