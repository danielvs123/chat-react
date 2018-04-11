import React, { Component } from 'react';
import MyAvatar from './Avatar';
import './css/ControlBar.css';
import './css/Common.css';
import ChatSVG from '../svg/chat.svg';
import UsersSVG from '../svg/users.svg';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { goToPage } from '../Action/GoToPage'

class ControlBar extends Component {
    render() {
        return (
            <div id="control-bar">
                <div id="myAvatar-outer">
                    <img className={"avatar"} src="https://shuaiyixu.com/img/1.jpg" />
                </div>
                <div id="router-bar">
                    <div className="pageRouterDiv"
                         onClick = { () => this.props.goToPage({name:"chat"})}
                    >
                        <img src={ChatSVG} className="pageRouterBtn"/>
                    </div>
                    <div className="pageRouterDiv"
                         onClick = { () => this.props.goToPage({name:"friend"})}
                    >
                        <img src={UsersSVG} className="pageRouterBtn"/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activePage: state.activePage
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({goToPage:goToPage},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(ControlBar);
