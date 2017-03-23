import React from 'react';
import MediaCard from './media_card';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {collectionItems} = this.props;
    const cards = collectionItems.map(item => (
      <div className='mc-wrapper' key={item.id}>
        <MediaCard
          title={item.title}
          subtitle={item.subtitle}
          mediaInfo={item.mediaInfo}
          footer={item.footer}
          showPath={item.showPath}>
        </MediaCard>
      </div>
    ))

    return (
      <div className='card-collection'>
        {cards}
      </div>
    );
  }
}

export default UserIndex;
