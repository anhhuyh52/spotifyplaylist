import React from 'react';

import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
        <div className="TrackList">
            {
                this.props.tracks ?
                    this.props.tracks.map(track => {
                        return <Track track={track} key={track.id} isRemoval = {this.props.isRemoval} onRemove = {this.props.onRemove} onAdd = {this.props.onAdd} />
                    } 
                ) : console.log(this._reactInternalFiber._debugOwner.type.name)
            }
        </div>
    );
}
}
export default TrackList;
