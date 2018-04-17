import React, { Component } from 'react';
import {connect} from 'react-redux';
import './css/FriendDetailPage.css';

class FriendDetailPage extends Component {
    render() {
        if (!this.props.user){
           return (
               <div id="friendDetailPage" />
           )
        }
        return (
            <div id="friendDetailPage">
                <div id="personal_info">
                    <div id="personal_detail_outer">
                        <div id="personal_line">
                            <div id="personal_info_name">{this.props.user.username}</div>
                            <div id="personal_left">
                                <img id="personal_info_avatar" src={this.props.user.avatarUrl}/>
                            </div>
                            <div className="clear" />
                        </div>
                        <div id="send-message-btn">发消息</div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(FriendDetailPage);
