import React, { Component } from 'react';
import './css/ChatList.css';

class SearchBox extends Component {
    render() {
        return (
            <div id="search-box">
                <input type="text" placeholder="Search.." />
            </div>
        );
    }
}

export default SearchBox;
