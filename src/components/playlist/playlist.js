import React from 'react';
import './playlist.css';
import {TrackList} from '../tracklist/tracklist.js'

export class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleNameChange(e) {
       this.props.onNameChange(e.target.value);
    }

    render() {
        return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            <TrackList playlistName={this.props.playlistName} playlistTracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
            <button className="Playlist-save" onChange={this.handleNameChange}>SAVE TO SPOTIFY</button>
        </div>
        )
    }
}