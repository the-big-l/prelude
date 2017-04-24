import React from 'react';
import {Link} from 'react-router';

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      imageUrl,
      title,
      mediaInfo,
      footer,
      showPath} = this.props;

    return (
      <Link to={showPath}>
        <div className='media-card'>
          <img src={imageUrl} alt="art"></img>
          <h2>{title}</h2>
          <p className='footer'>{mediaInfo}</p>
          <p className='footer'>{footer}</p>
        </div>
      </Link>
    );
  }
}

export default MediaCard;
