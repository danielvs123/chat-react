import React, { Component } from 'react';
import MyAvatar from './Avatar';
import './css/ControlBar.css';
import './css/Common.css';
import ChatSVG from '../svg/chat.svg';
import UsersSVG from '../svg/users.svg';

class ControlBar extends Component {
    goToChatPage() {
        this.props.setPage("MainChatView")
    }
    goToUserPage() {
        this.props.setPage("MainFriendsView");
    }
    render() {
        return (
            <div id="control-bar">
                <div id="myAvatar-outer">
                    <img className={"avatar"} src="https://shuaiyixu.com/img/1.jpg" />
                </div>
                <div id="router-bar">
                    <div className="pageRouterDiv" onClick={this.goToChatPage.bind(this)}>
                        <img src={ChatSVG} className="pageRouterBtn"/>
                    </div>
                    <div className="pageRouterDiv" onClick={this.goToUserPage.bind(this)}>
                        <img src={UsersSVG} className="pageRouterBtn"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ControlBar;
