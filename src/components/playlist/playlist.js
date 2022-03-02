import React from 'react';
import './playlist.css';
import TrackList from '../tracklist/tracklist.js'

export class Playlist extends React.Component {
    render() {
        return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            <TrackList />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
        )
    }
}