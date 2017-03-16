import React from 'react';
import ReactHowler from 'react-howler';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(e) {
    e.preventDefault();
    this.setState({playing: !this.state.playing})
  }


  render() {
    return (
      <div id='player'>
        <button id='play-pause' onClick={this.togglePlay}>play-pause</button>
        <ReactHowler
          src='https://p.scdn.co/mp3-preview/248be51d5e94b617744624ce66ca8e6fafd52a4d?cid=null'
          playing={this.props.state}
        />
      </div>
    );
  }
}

export default Player;
