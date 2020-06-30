import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Too Much",
          artist: "Sufjan Stevens",
          album: "The Age of Adz",
          id: 1,
        },
        {
          name: "There There",
          artist: "Radiohead",
          album: "Hail to the Theif",
          id: 2,
        },
        {
          name: "Eugene",
          artist: "Sufjan Stevens",
          album: "Carrie and Lowell",
          id: 3,
        },
      ],

      playlistName: "Brandon's bad ass playlist",

      playlistTracks: [
        {
          name: "Futile Devices",
          artist: "Sufjan Stevens",
          album: "The Age of Adz",
          id: 4,
        },
        {
          name: "2 + 2 =5 (The Lukewarm.)",
          artist: "Radiohead",
          album: "Hail to the Theif",
          id: 5,
        },
        {
          name: "Fourth of July",
          artist: "Sufjan Stevens",
          album: "Carrie and Lowell",
          id: 6,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
