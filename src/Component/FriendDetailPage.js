import React, { Component } from 'react';
import './css/FriendDetailPage.css';

class FriendDetailPage extends Component {
    render() {
        return (
            <div id="friendDetailPage">
                <div id="personal_info">
                    <div id="personal_detail_outer">
                        <div id="personal_line">
                            <div id="personal_info_name">userIdDemo1</div>
                            <div id="personal_left">
                                <img id="personal_info_avatar" src="https://shuaiyixu.com/img/1.jpg"/>
                            </div>
                            <div className="clear" />
                        </div>
                        <div id="send-message-btn" data-id="userIdDemo1">发消息</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FriendDetailPage;
