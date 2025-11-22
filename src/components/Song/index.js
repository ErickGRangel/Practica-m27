import React from 'react';
import './styles.css';


const Song = ({ song, onAdd }) => {
  const title = song ? song.title : '';
  const artist = song ? song.artist : '';
  const album = song ? song.album : '';

  return (
    <div className="song">
      <div className="image"></div>
      <div className="info">
        <h2>{title}</h2>
        <p>Artista: {artist}</p>
        <p>Álbum: {album}</p>
      </div>
      {onAdd ? (
        <button className="add-btn" onClick={() => onAdd(song)}>
          Agregar a mi biblioteca
        </button>
      ) : null}
    </div>
  );
};

export default Song;