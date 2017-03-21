import React from 'react';
import ListBillboard from './list_billboard';
import SongListIndex from './song_list_index';

class SongList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestSongs(this.params());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.requestSongs(nextProps.params.id);
    }
    console.log('song list');
    console.log(this.props.songList);
  }

  params() {
    if (this.props.params.id) return this.props.params.id;
  }

  isPlaylist() {
    return this.props.type === 'playlist';
  }

  render() {
    const isPlaylist = false;
    const {description, songList, title, type } = this.props;

    return (
      <div className='song-list'>
        <header className='song-list'>
          <ListBillboard
            type={type}
            title={title}
            subTitle={description}
            author={'Prelude'}
            count={songList.length}
            />
        </header>
        <div className='play-follow'>
          <button className='play'>Play</button>
          {this.isPlaylist() ? <button>Follow</button> : null}
        </div>
        <SongListIndex songList={this.props.songList} />
      </div>
    );
  }
}

export default SongList;
