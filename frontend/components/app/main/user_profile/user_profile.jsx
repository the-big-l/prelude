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
      <div className='user-index'>
        <header className='index-header'>
          <ListBillboard
            type={type}
            title={title}
            subTitle={subTitle}
            footer={footer}
            />
        </header>
        <div className='play-follow'>
          <button>Follow</button>
        </div>
        <div className='cc-wrapper'>
          <PlaylistCardCollectionContainer />
        </div>
      </div>
    );
  }
}

export default UserProfile;
