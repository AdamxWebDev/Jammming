import React from 'react';
import './searchbar.css'

export class SearchBar extends React.Component {
    render() {
        return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">SEARCH</button>
        </div>
        )
    }
}