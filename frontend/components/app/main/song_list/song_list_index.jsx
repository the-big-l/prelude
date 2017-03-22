import React from 'react';
import SongListIndexItem from './song_list_index_item';

class SongListIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listItems } = this.props;
    const songs = listItems.map((listItem, idx) => (
      <SongListIndexItem
        key={listItem.song.id}
        idx={idx}
        song={listItem.song}
        order={idx + 1}
        listItem={listItem}
      />
    ));

    return (
      <div className='song-list-index'>
        <table>
          <thead>
            <tr>
              <th className='playlist-add'></th>
              <th className='track-no'>#</th>
              <th className='song'>Song</th>
              <th>Artist</th>
              <th>Album</th>
              <th className='context-column'></th>
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
