import { connect } from 'react-redux';
import BrowseIndex from './browse_index';

const mapStateToProps = ({session}, ownProps) => {
  const indexItems = [
    {
      id: 0,
      name: 'Songs',
      path: '/songs'
    },
    {
      id: 1,
      name: 'Users',
      path: '/users'
    }
  ];

  return {
    indexItems,
    title: 'browse',
    currentUserId: session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => ({
  requestListItems: () => {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseIndex);
