import React from 'react';
import Song from '../Song/index'; 

const Library = ({ songs }) => {
  return (
    <section className="library">
      <h2>Mi Biblioteca</h2>
      {songs.length > 0 ? (
        <div className="songs-grid">
          {songs.map((song) => (
            <Song
              key={song.id}
              song={song}
            />
          ))}
        </div>
      ) : (
        <p>Tu biblioteca está vacía.</p>
      )}
    </section>
  );
};

export default Library;