import React, { Component } from 'react';
import SearchBox from './SearchBox';
import './css/FriendList.css';

class FriendList extends Component {
    render() {
        return (
            <div id="friend-control-bar">
                <SearchBox/>
                <div id="friend-list">
                    <div className="friend-list-dom">
                        <img
                        src="https://shuaiyixu.com/img/2.jpg" className="friend-list-dom-img" />
                        <div className="friend-list-dom-name">
                            DanielVS
                        </div>
                    </div>
                    <div className="friend-list-dom">
                        <img
                            src="https://shuaiyixu.com/img/2.jpg" className="friend-list-dom-img" />
                        <div className="friend-list-dom-name">
                            DanielVS
                        </div>
                    </div>
                    <div className="friend-list-dom">
                        <img
                            src="https://shuaiyixu.com/img/2.jpg" className="friend-list-dom-img" />
                        <div className="friend-list-dom-name">
                            DanielVS
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FriendList;