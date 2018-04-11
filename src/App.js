import React, { Component } from 'react';
import ControlBar from './Component/ControlBar';
import './App.css';
import MainChatView from "./MainChatView";
import MainFriendsView from "./MainFriendsView"
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

class App extends Component {
    render() {
        if (!this.props.activePage){
            return (
                <div id="body-container">
                    <div id="main-container">
                        <ControlBar />
                        <MainChatView />
                    </div>
                </div>
            )
        }else{
            if (this.props.activePage.name === "chat"){
                return (
                    <div id="body-container">
                        <div id="main-container">
                            <ControlBar />
                            <MainChatView />
                        </div>
                    </div>
                )
            }else{
                return (
                    <div id="body-container">
                        <div id="main-container">
                            <ControlBar />
                            <MainFriendsView />
                        </div>
                    </div>
                );
            }
        }
    }
}
function mapStateToProps(state) {
    return {
        activePage: state.activePage
    }
}

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({GoToPage:GoToPage},dispatch);
// }

export default connect(mapStateToProps)(App);
