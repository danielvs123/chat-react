import React, { Component } from 'react';
import ChatList from './Component/ChatList';
import ChatPage from './Component/ChatPage';

class MainChatView extends Component {

    state = {
        onclickUser:""
    };

    transferMsg(msg) {
        this.setState({
            onclickUser:msg
        });
    }

    render() {
        return (
            <div>
                {/*这里是点击的*/}
                <ChatList transferMsg = {msg => this.transferMsg(msg)}/>
                {/*这里是输入的*/}
                <ChatPage user={this.state.onclickUser}/>
            </div>
        );
    }
}

export default MainChatView;