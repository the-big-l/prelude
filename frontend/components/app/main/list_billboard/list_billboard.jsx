import React from 'react';

class ListBillboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      type,
      title,
      subTitle,
      footer } = this.props;

    return (
      <div className='list-billboard'>
        <figure className='lb-img'></figure>
        <aside className='media-info'>
          <h4 className='type'>{type}</h4>
          <h1 className='title'>{title}</h1>
          <p className='sub-title'>{subTitle}</p>
          <p className='meta'>{footer}</p>
        </aside>
      </div>
    );
  }
}

export default ListBillboard;
