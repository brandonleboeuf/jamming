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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    // gets the current track list from the playlistTracks
    let tracks = this.state.playlistTracks;
    // if the track has the same id as another track in the playlist
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      // do nothing
      return;
    }
    // otherwise, add that track to the playlist
    tracks.push(track);
    // set as the new playlistTracks
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    // filters out the track from the playlistTracks
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
    // set as the new playlistTracks
    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(newName) {
    this.setState({ playlistName: newName });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
  }

  search(searchTerm) {
    console.log(searchTerm);
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
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
