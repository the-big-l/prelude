import React from 'react';
import ListBillboard from './list_billboard';
import SongListIndex from './song_list_index';

class SongList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestSongs();
  }


  render() {
    const isPlaylist = false;

    return (
      <div className='song-list'>
        <header className='song-list'>
          <ListBillboard
            type={'browse'}
            title={'SONGS'}
            subTitle={'All the songs'}
            author={'Prelude'}
            count={this.props.songList.length}
            />
        </header>
        <div className='play-follow'>
          <button className='play'>Play</button>
          {isPlaylist ? <button>Follow</button> : null}
        </div>
        <SongListIndex songList={this.props.songList} />
      </div>
    );
  }
}

export default SongList;
