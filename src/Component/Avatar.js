import React, { Component } from 'react';
import './css/ChatList.css';

class MyAvatar extends Component {
    render() {
        return (
            <div className={"img-div"}>
                <img className={"avatar"} src="https://shuaiyixu.com/img/1.jpg" />
            </div>
        );
    }
}

export default MyAvatar;
