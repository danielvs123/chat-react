import React, { Component } from 'react';
import ChatList from './Component/ChatList';
import ChatPage from './Component/ChatPage';

class MainChatView extends Component {

    state = {
        onclickUser:""
    };

    transferMsg(uid) {
        this.props.setCurrentUser(uid);
        this.setState({
            onclickUser:uid
        });
    }

    render() {
        return (
            <div>
                {/*这里是点击的*/}
                <ChatList transferMsg = {uid => this.transferMsg(uid)}/>
                {/*这里是输入的*/}
                <ChatPage user={this.state.onclickUser}/>
            </div>
        );
    }
}
//
// function mapStateToProps() {
//
// }

export default MainChatView;