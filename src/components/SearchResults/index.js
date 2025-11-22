import React from 'react';
import Song from '../Song/index'; 
import './styles.css';

const SearchResults = ({ songs, onAdd }) => {
  return (
    <section className="search-results">
      <h2>Resultados de Búsqueda</h2>
      <div className="songs-grid">
        {songs.map((song) => (
          <Song
            key={song.id}
            song={song}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
    
    

     