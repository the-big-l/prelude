import React from 'react';
import ReactHowler from 'react-howler';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      source: 'https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3'
    };
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(e) {
    e.preventDefault();
    console.log(this.state.playing);
    this.setState({playing: !this.state.playing});
  }


  render() {
    return (
      <div id='player'>
        <button id='play-pause' onClick={this.togglePlay}>play/pause</button>
        <ReactHowler
          src={this.state.source}
          playing={this.state.playing}
        />
      </div>
    );
  }
}

export default Player;
