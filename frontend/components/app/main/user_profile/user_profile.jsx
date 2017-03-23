import React from 'react';
import ListBillboard from '../list_billboard/list_billboard';
import PlaylistCardCollectionContainer from '../card_collection/playlist_card_collection_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestCollection(this.props.params.id);
  }

  render() {
    const {lbInfo} = this.props;
    const {type, title, subTitle, footer} = lbInfo;

    return (
      <div className='cc-profile'>
        <header className='cc-profile-header'>
          <ListBillboard
            type={type}
            title={title}
            subTitle={subTitle}
            footer={footer}
            />
          <div className='play-follow'>
            <button>Follow</button>
          </div>
        </header>
        <div className='cc-wrapper'>
          {/*better to be in cc w/ props passed down to it?*/}
          <div className='cc-header'>
            <ul className='cc-tabs'>
              <li className='select'>Playlists</li>
            </ul>
          </div>
          <PlaylistCardCollectionContainer />
        </div>
      </div>
    );
  }
}

export default UserProfile;
