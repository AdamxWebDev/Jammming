import { SearchResults } from '../searchresults/searchresults.js';
import './App.css';
import { SearchBar } from '../searchbar/searchbar.js';
import { Playlist } from '../playlist/playlist.js';
import React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [{name: ""}, {artist: ""}, {album: ""}, {id: ""}], playlistTracks: [{name: ""}, {artist: ""}, {album: ""}, {id: ""}], playlistName: "Test Playlist"}
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let newPlaylist = this.state.playlistTracks;
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      newPlaylist.push(track)
    }
    this.setState({playlistTracks: newPlaylist})
  }

  removeTrack(track) {
    let newPlaylist = this.state.playlistTracks;
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      newPlaylist = newPlaylist.filter(savedTrack => savedTrack.id !== track.id);
      this.setState({playlistTracks: newPlaylist});
    } else {
        return;
      }
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
        </div>
      </div>
    </div>
    )
  }
}

