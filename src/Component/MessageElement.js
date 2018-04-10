import React, { Component } from 'react';
import './css/ChatList.css';

let uid = "Danielvs";
class MessageElement extends Component {

    handleClick() {
        this.props.transferMsg(uid);
    }

    render() {
        return (
            <div className="messageElement" onClick={this.handleClick.bind(this)}>
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
