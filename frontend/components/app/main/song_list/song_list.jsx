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

    return (
      <div className='song-list'>
        <header>
          <ListBillboard
            type={'index'}
            title={'SONGS'}
            subTitle={'All the songs'}
            author={'guest'}
            count={this.props.songList.length}
            />
        </header>
        <ul>
          {songs}
        </ul>
      </div>
    );
  }
}

export default SongList;
