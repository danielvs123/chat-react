import React, { Component } from 'react';
import FriendList from './Component/FriendList';
import FriendDetailPage from './Component/FriendDetailPage';

class MainFriendsView extends Component {

    render() {
        return (
            <div>
                <FriendList />
                <FriendDetailPage />
            </div>
        );
    }
}

export default MainFriendsView;