import React, { Component } from 'react';
import ControlBar from './Component/ControlBar';
import './App.css';
import MainChatView from "./MainChatView";
import MainFriendsView from "./MainFriendsView"

class App extends Component {
    state = {
        currentPage:"MainChatView"
    };
    setPage(msg){
        this.setState({
            currentPage:msg
        })
    }
    render() {
        if (this.state.currentPage === "MainChatView"){
            return (
                <div id="body-container">
                    <div id="main-container">
                        <ControlBar setPage = {msg => this.setPage(msg)}/>
                        <MainChatView/>
                    </div>
                </div>
            );
        }else{
            return (
                <div id="body-container">
                    <div id="main-container">
                        <ControlBar setPage = {msg => this.setPage(msg)}/>
                        <MainFriendsView/>
                    </div>
                </div>
            );
        }
    }
}

export default App;
