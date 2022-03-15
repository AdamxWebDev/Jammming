import React from 'react';
import './searchbar.css'

let myStorage = window.localStorage;

export class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            term: myStorage.getItem('value')
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        myStorage.setItem('value', this.state.term)
        this.props.onSearch(this.state.term);
        
    }

    handleTermChange(e) {
        this.setState({ term: e.target.value });
    }

    render() {
        return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} value={this.state.term}/>
            <button className="SearchButton" onClick={this.search}>SEARCH</button>
        </div>
        )
    }
}