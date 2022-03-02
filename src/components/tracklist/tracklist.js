import React from 'react';
import './tracklist.css';
import Track from '../track/track.js'

export class TrackList extends React.Component {
    render() {
        return (
        <div className="TrackList">
        <Track />
        </div>
        )
    }
}