import React from 'react'
import Spotify from '../../util/spotify.js';

export class PlaylistList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { pulledPlaylist: [] }
    }

    list() {
       const results = async () => {
           await Spotify.pullPlaylist()
       }
       this.setState({pulledPlaylist: results})
    }

    componentDidUpdate() {
        console.log(this.state.pulledPlaylist)
    }

    render() {
        return (
            <div className="Playlist">
                <h2>Playlists</h2>
                <button onClick={this.list}>Log</button>
            </div>
        )
    }
}