import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { title, artist, album,} = this.props;
    return (
      <div className="song">
        <h2>{title}</h2>
        <p>Artista: {artist}</p>
        <p>Álbum: {album}</p>
        </div>
    );
  }
}
export default Song;