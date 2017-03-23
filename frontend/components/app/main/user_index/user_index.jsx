import React from 'react';
import UserCardCollectionContainer from '../card_collection/user_card_collection_container';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestCollection();
  }

  render() {
    return (
      <div className='cc-index'>
        <header className='cc-index-header'>
          <h1>Users</h1>
        </header>
        <div className='cc-wrapper'>
          <UserCardCollectionContainer />
        </div>
      </div>
    );
  }
}

export default UserIndex;
