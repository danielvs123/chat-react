import React, { Component } from 'react';
import ControlBar from './Component/ControlBar';
import './App.css';
import MainChatView from "./MainChatView";
import MainFriendsView from "./MainFriendsView"

class App extends Component {
  render() {
    return (
        <div id="body-container">
            <div id="main-container">
                <ControlBar/>
                {/*<MainChatView/>*/}
                <MainFriendsView/>
            </div>
        </div>
    );
  }
}

export default App;
