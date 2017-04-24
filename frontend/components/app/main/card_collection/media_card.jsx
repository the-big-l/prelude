import React from 'react'
import {Link} from 'react-router'

class MediaCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      id,
      imageUrl,
      title,
      mediaInfo,
      footer,
      showPath
    } = this.props

    const imageStyle = {
      backgroundImage: `url(${imageUrl})`
    }

    return (
      <Link to={showPath}>
        <div className='media-card'>
          <div className='mc-img-wrapper'>
            <div className='mc-img' style={imageStyle}></div>
          </div>
          <div className='mc-info'>
            <h2>{title}</h2>
            <p className='footer'>{mediaInfo}</p>
            <p className='footer'>{footer}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default MediaCard
