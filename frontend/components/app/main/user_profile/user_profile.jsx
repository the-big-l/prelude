import React from 'react';
import ListBillboard from '../list_billboard/list_billboard';
import PlaylistCardCollectionContainer from './PlaylistCardCollectionContainer';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false}
    this.handlePlay = this.handlePlay.bind(this);
  }

  render() {
    const isPlaylist = false;
    // const {description, listItems, title, type, author } = this.props;

    return (
      <div className='user-index'>
        <header className='index-header'>
          <ListBillboard
            type={'User'}
            title={`${firstName} ${lastName}`}
            subTitle={description}
            footer={`Joined in Jan 2017`}
            />
        </header>
        <div className='play-follow'>
          <button>Follow</button>
        </div>
        <div>playlists go here</div>
      </div>
    );
  }
}

export default UserProfile;
