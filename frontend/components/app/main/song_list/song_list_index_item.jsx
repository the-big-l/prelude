import React from 'react';

class SongListIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {song: {
      // track_no,
      title,
      artist,
      album
    }} = this.props;

    return (
      <tr className='song-list-index_item'>
        <td><div><button className='playlist-add'></button></div></td>
        <td><div>{'0'}</div></td>
        <td><div className='song'>{title}</div></td>
        <td><div>{artist}</div></td>
        <td><div>{album}</div></td>
      </tr>
    );
  }
}

export default SongListIndexItem;
