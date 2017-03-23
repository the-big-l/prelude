import React from 'react';

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      subtitle,
      mediaInfo,
      footer } = this.props;

    return (
      <div className='media-card'>
        <h2>{title}</h2>
        <h3>"{subtitle}"</h3>
        <p className='footer'>{mediaInfo}</p>
        <p className='footer'>{footer}</p>
      </div>
    );
  }
}

export default MediaCard;
