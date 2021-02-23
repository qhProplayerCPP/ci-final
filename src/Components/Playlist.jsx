import '../Css/Playlist.css';
import React from 'react';
import { ShowPlaylist } from '../Utilities';

export class Playlist extends React.Component {
  componentDidMount() {
    ShowPlaylist();
  }
  render() {
    return <div id="Playlist"></div>;
  }
}
