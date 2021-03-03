import React from 'react';
import '../Css/User.css';
import '../Css/SearchBar.css';
import { Navbar } from './Navbar';
import { SearchBar } from './SearchBar';
import { PlayingSong } from './PlayingSong';
import { Footer } from './Footer';
import { Playlist } from './Playlist';
export class User extends React.Component {
  username;
  constructor(props) {
    super(props);
    this.username = this.props.user;
  }
  render() {
    return (
      <div>
        <Navbar user={this.username} />
        <div className="spotifryDisplay" style={{ display: 'flex' }}>

          <div className="controller" style={{ width: '60%' }}>
            <PlayingSong
              title="Unknown"
              author="Unknown"
              thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Vinyl_record.svg/1200px-Vinyl_record.svg.png"
            />
            <Playlist />
          </div>
          <div className="displayer" style={{ width: '40%' }}>
            <SearchBar />
            <div id="SongsList"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
