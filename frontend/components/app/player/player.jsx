import React from 'react';
import ReactHowler from 'react-howler';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      togglePlay,
      toggleLoop,
      toggleMute,
      previousSong,
      nextSong,
      changeVolume,
      playing,
      loop,
      mute,
      source
    } = this.props;

    return (
      <div id='player'>
        <div id='now-playing'>{source}</div>
        <button id='loop' onClick={e => toggleLoop()}>loop</button>
        <button id='prev-song' onClick={e => previousSong()}>prev</button>
        <button id='play-pause' onClick={e => togglePlay()}>play/pause</button>
        <button id='next-song' onClick={e => nextSong()}>next</button>
        <button id='mute' onClick={e => toggleMute()}>mute</button>
        <ReactHowler
          src={source}
          playing={playing}
          mute={mute}
          loop={loop}
        />
      </div>
    );
  }
}

export default Player;
