import React from 'react';
import SongListIndexItem from './song_list_index_item';

class SongListIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      songList } = this.props;
    const songs = songList.map((song, idx) => <SongListIndexItem key={idx} song={song} />);

    return (
      <div className='song-list-index'>
        <table>
          <thead>
            <tr>
              <th className='playlist-add'></th>
              <th className='track-no'>#</th>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
            </tr>
          </thead>
          <tbody>
            {songs}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongListIndex;