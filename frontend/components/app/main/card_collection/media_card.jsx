import React from 'react';
import {Link} from 'react-router';

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      title,
      subtitle,
      mediaInfo,
      footer,
      showPath} = this.props;

    return (
      <Link to={showPath}>
        <div className='media-card'>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p className='footer'>{mediaInfo}</p>
          <p className='footer'>{footer}</p>
        </div>
      </Link>
    );
  }
}

export default MediaCard;
