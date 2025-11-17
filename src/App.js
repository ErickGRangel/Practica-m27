import React, { Component } from 'react';
import Header from './components/header';
import Song from './components/song';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('La app se ha cargado correctamente');
  }
    render() {
    return (
      <>
        <Header />
        <article className="song-list">
          <Song title="Bohemian Rhapsody" artist="Queen" album="A Night at the Opera" />
          <Song title="Blinding Lights" artist="The Weeknd" album="	
After Hours
" />
          <Song title="Shape of You" artist="Ed Sheeran" album="Divide" />
        </article>
      </>
    );
  }
}

export default App;