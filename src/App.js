import React, { useState, useEffect } from 'react';
import Header from './components/Header/index';
import SearchResults from './components/SearchResults/index';
import Library from './components/Library/index';
import './App.css';

function App() {
  const [searchResults] = useState([
    { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera' },
    { id: 2, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours' },
    { id: 3, title: 'Shape of You', artist: 'Ed Sheeran', album: 'Divide' },
    { id: 4, title: 'Dancing Queen', artist: 'ABBA', album: 'Arrival' },
  ]);

  const [library, setLibrary] = useState([]);

  useEffect(() => {
    console.log('La biblioteca ha sido actualizada:', library);
  }, [library]);

  const addToLibrary = (song) => {
    setLibrary([...library, song]);
  };

  return (
    <>
      <Header />
      <article className="song-list">
        <SearchResults songs={searchResults} onAdd={addToLibrary} />
        <Library songs={library} />
      </article>
    </>
  );
}

export default App;