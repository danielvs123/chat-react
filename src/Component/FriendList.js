import React, { Component } from 'react';
import SearchBox from './SearchBox';
import './css/FriendList.css';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { ViewUserProfile } from '../Action/ViewUserProfile'

class FriendList extends Component {
    createFriendList(){
        return this.props.users.map((user) => {
            return (
                <div className="friend-list-dom"
                     key={user.userId}
                     onClick = { () => this.props.ViewUserProfile(user)}
                >
                    <img
                        src={user.avatarUrl} className="friend-list-dom-img" />
                    <div className="friend-list-dom-name">
                        {user.username}
                    </div>
                </div>
            )
        });
    }
    render() {
        return (
            <div id="friend-control-bar">
                <SearchBox/>
                <div id="friend-list">
                    {this.createFriendList()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users:state.users
    }

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ViewUserProfile:ViewUserProfile},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(FriendList);