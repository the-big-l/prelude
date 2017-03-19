import React from 'react';
import ListBillboard from './list_billboard';

class SongList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestSongs();
  }


  render() {
    const songs = this.props.songList.map(song => <li>{song.title}</li>);
    const isPlaylist = true;

    return (
      <div className='song-list'>
        <header className='song-list'>
          <ListBillboard
            type={'playlist'}
            title={'SONGS'}
            subTitle={'All the songs'}
            author={'guest'}
            count={this.props.songList.length}
            />
        </header>
        <div className='play-follow'>
          <button className='play'>Play</button>
          {isPlaylist ? <button>Follow</button> : null}
        </div>
        <ul>
          {songs}
        </ul>
      </div>
    );
  }
}

export default SongList;
