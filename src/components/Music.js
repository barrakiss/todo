// eslint-disable-next-line
import React, { Component } from 'react';
import soundFile from '../star-wars.mp3';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = { play: false };
    this.url = soundFile;
    this.audio = new Audio(this.url);
    this.audio.autoplay = true;
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    this.setState({ play: !this.state.play });
    this.state.play ? this.audio.play() : this.audio.pause();
  }

  render() {
    return (
      <div
        id="music"
        className={this.state.play ? 'music-mute' : 'music-unmute'}
        onClick={this.togglePlay}
      />
    );
  }
}

export default Music;
