import React from 'react';
import { connect } from 'react-redux';
import HomeView from './HomeView';
import * as appActions from '../../actions/appActions';

export const HomeContainer = props => {
  React.useEffect(() => {
    props.fetchPosts();
  }, []);

  return <HomeView {...props} />;
};

const mapStateToProps = state => ({
  posts: state.app.posts,
  loader: state.app.loader
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(appActions.fetchPosts()),
  cretePost: data =>
    new Promise((resolve, reject) => {
      dispatch(appActions.cretePost(data, resolve, reject));
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
