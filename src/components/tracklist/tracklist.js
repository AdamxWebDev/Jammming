import React from 'react';
import './tracklist.css';
import {Track} from '../track/track.js'

export class TrackList extends React.Component {
    render() {
        return (
        <div className="TrackList">
            {
                this.props.tracks.map(track => {
                    return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemoval={this.props.onRemove} isRemoval={this.props.isRemoval}/>
                })
            }        
        </div>
        )
    }
}