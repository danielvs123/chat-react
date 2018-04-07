import React, { Component } from 'react';
import ChatListBar from './Component/ChatList';
import ChatPage from './Component/ChatPage';

class MainChatView extends Component {
    render() {
        return (
            <div>
                <ChatListBar/>
                <ChatPage/>
            </div>
        );
    }
}

export default MainChatView;