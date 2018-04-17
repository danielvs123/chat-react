import React, { Component } from 'react';
import ControlBar from './Component/ControlBar';
import './App.css';
import MainChatView from "./MainChatView";
import MainFriendsView from "./MainFriendsView"
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import openSocket from 'socket.io-client';
import localforage from 'localforage';

const socket = openSocket('http://47.89.187.42:4000');
const uid = "pbc6cqcW80XHRbBJptIcqEVZpjY2";


class App extends Component {
    componentDidMount(){
        localforage.config({
            driver      : localforage.INDEXEDDB,
            name        : 'Tinko',
            version     : 1.0,
            size        : 4980736,
            storeName   : 'TinkoChat',
            description : 'This is the chat database'
        });
        socket.on('connect'+uid, data => this.getChatData(data));
    }
    getChatData(d){
        console.log(d);
        let data = JSON.parse(d);
        if (data.type === 1){
            //{"type":1,"from":"mrhUd8E7YNg3ZWW4EdEK5hIZfVE2","message":"ss","time":1523903819000}
            //private chat
            let fromId = data.from;
            localforage.getItem(fromId).then(function(value) {
                let rtn = [],
                    jsonData = JSON.stringify({
                        message:data.message,
                        time:data.time
                    });
                if (value === null){
                    rtn = [jsonData];
                }else{
                    rtn = value;
                    rtn.push(jsonData);
                }
                localforage.setItem(fromId, rtn).then(function (value) {
                    console.log("insert chat data success");
                }).catch(function(err) {
                    console.log(err);
                });
            }).catch(function(err) {
                // This code runs if there were any errors
                console.log(err);
            });
        }
    }

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
