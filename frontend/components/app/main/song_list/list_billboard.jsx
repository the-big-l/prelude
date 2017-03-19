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
      author,
      count } = this.props;

    return (
      <div className='list-billboard'>
        <figure>picture here</figure>
        <aside className='media-info'>
          <h4>{type}</h4>
          <h1>{title}</h1>
          <p>{this.subTitle}</p>
          <p>create by: {author} * {count} songs</p>
        </aside>
      </div>
    );
  }
}

export default ListBillboard;
