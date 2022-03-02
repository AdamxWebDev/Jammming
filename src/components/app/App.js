import { SearchResults } from '../searchresults/searchresults.js';
import './App.css';
import { SearchBar } from '../searchbar/searchbar.js';
import { Playlist } from '../playlist/playlist.js';
import React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [{name: ""}, {artist: ""}, {album: ""}, {id: ""}]}
  }

  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist />
        </div>
      </div>
    </div>
    )
  }
}
