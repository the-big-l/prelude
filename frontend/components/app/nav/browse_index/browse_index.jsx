import React from 'react';
import {Link} from 'react-router';

class BrowseIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestListItems(this.props.currentUserId);
  }

  render() {
    const indexItems = this.props.indexItems.map(item => {
      return (
        <li key={item.id}><Link to={item.path}>{item.name}</Link></li>
      );
    });

    return (
      <div className='browse-index'>
        <h4>{this.props.title}</h4>
        <ul className='bi-list'>
          {indexItems}
        </ul>
      </div>
    );
  }
}

export default BrowseIndex;
