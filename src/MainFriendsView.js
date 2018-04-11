import React, { Component } from 'react';
import FriendList from './Component/FriendList';
import FriendDetailPage from './Component/FriendDetailPage';

class MainFriendsView extends Component {

    state = {
        currentOnSelectUser:""
    };

    startChat(uid){
        this.setState({
            currentOnSelectUser:uid
        });
    }

    render() {
        return (
            <div>
                <FriendList startChat = {uid => this.startChat(uid)}/>
                <FriendDetailPage user={this.state.currentOnSelectUser}/>
            </div>
        );
    }
}

export default MainFriendsView;