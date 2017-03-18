import React from 'react';
import ReactHowler from 'react-howler';
import TimeFormat from 'format-duration';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seek: 0,
      duration: 0
    };
    this.renderSeekPos = this.renderSeekPos.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleSeekPos = this.handleSeekPos.bind(this);
  }

  componentWillUnmount() {
    if (this.props.playing) {
      this.props.togglePlay();
    }
  }

  togglePlayButton() {
    return this.props.playing ? 'pause' : 'play'
  }

  renderSeekPos() {
    this.setState({
      seek: this.player.seek()
    });
    if (this.props.playing) {
      setTimeout(() => this.renderSeekPos(), 100/6);
    }
  }

  handleSeekPos(e) {
    this.player.seek(e.currentTarget.value / 100 * this.state.duration);
  }

  thumbPosition() {
    return this.state.seek / this.state.duration * 100;
  }

  handleOnLoad() {
    this.setState({
      duration: this.player.duration()
    })
  }

  currentSongPosition() {
    return TimeFormat(this.state.seek * 1000);
  }

  currentSongDuration() {
    return TimeFormat(this.state.duration * 1000);
  }

  render() {
    const {
      togglePlay,
      toggleLoop,
      toggleMute,
      previousSong,
      nextSong,
      shuffleSongs,
      changeVolume,
      playing,
      loop,
      mute,
      song
    } = this.props;

    return (
      <div id='player'>
        <div id='now-playing'>
          <div className='album-art'>
            {}
          </div>
          <div className='song-info'>
            <div className='song-title'>{song.title}</div>
            <div className='artist-name'>{song.artist}</div>
          </div>
        </div>
        <div id='player-controls'>
          <div id='player-buttons'>
            <button
              className='shuffle'
              onClick={e => shuffleSongs()}>
            </button>
            <button
              className='prev-song'
              onClick={e => previousSong()}>
            </button>
            <button
              className={this.togglePlayButton()}
              onClick={e => togglePlay()}>
            </button>
            <button
              className='next-song'
              onClick={e => nextSong()}>
            </button>
            <button
              className='loop'
              onClick={e => toggleLoop()}>
            </button>
          </div>
          <div id='player-seek'>
            <div className='song-pos'>
              {this.currentSongPosition()}
            </div>
            <input
              type='range'
              value={this.thumbPosition()}
              onChange={this.handleSeekPos}>
            </input>
            <div className='song-pos'>
              {this.currentSongDuration()}
            </div>
          </div>
        </div>
        <div id='player-volume'>
          <input type='range'></input>
        </div>
        <div className='hidden'>
          <ReactHowler
            src={song.src}
            html5={true}
            playing={playing}
            mute={mute}
            loop={loop}
            onLoad={this.handleOnLoad}
            onPlay={this.renderSeekPos}
            onEnd={nextSong}
            ref={(ref) => (this.player = ref)}
            />
        </div>
      </div>
    );
  }
}

export default Player;
