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
        <div id='now-playing'>{source.slice(source.length - 20, -4)}</div>
        <div id='player-controls'>
          <div id='player-buttons'>
            <button id='loop' onClick={e => toggleLoop()}></button>
            <button id='prev-song' onClick={e => previousSong()}></button>
            <button id='play-pause' onClick={e => togglePlay()}></button>
            <button id='next-song' onClick={e => nextSong()}></button>
            <button id='mute' onClick={e => toggleMute()}></button>
          </div>
          <div id='player-seek'>1:00 ---------+-------------- 3:00</div>
        </div>
        <div id='player-volume'>---+--</div>
        <div className='hidden'>
          <ReactHowler
            src={source}
            html5={true}
            playing={playing}
            mute={mute}
            loop={loop}
            />
        </div>
      </div>
    );
  }
}

export default Player;
