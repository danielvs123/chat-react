import React, { Component } from 'react';
import ControlBar from './Component/ControlBar';
import './App.css';
import MainChatView from "./MainChatView";
import MainFriendsView from "./MainFriendsView"
import { connect } from 'react-redux';
import { createStore } from 'redux';
const reducer = (state = [],action) =>{
    if (action.type === 'split_string'){
        console.log("get");
        return action.payload.split('');
    }
};
const store = createStore(reducer);
store.getState();

const action = {
    type:'split_string',
    payload:'asdf'
};

store.dispatch(action);
console.log(store.getState());

class App extends Component {
    state = {
        currentPage:"MainChatView",
        onSelectUser:""
    };
    setPage(msg){
        this.setState({
            currentPage:msg
        })
    }
    setCurrentUser(user){
        this.setState({
            onSelectUser:user
        })
    }
    render() {
        if (this.state.currentPage === "MainChatView"){
            return (
                <div id="body-container">
                    <div id="main-container">
                        <ControlBar setPage = {msg => this.setPage(msg)}/>
                        <MainChatView setCurrentUser = {user => this.setCurrentUser(user)} />
                    </div>
                </div>
            );
        }else{
            return (
                <div id="body-container">
                    <div id="main-container">
                        <ControlBar setPage = {msg => this.setPage(msg)}/>
                        <MainFriendsView setCurrentUser = {user => this.setCurrentUser(user)} />
                    </div>
                </div>
            );
        }
    }
}

export default App;
