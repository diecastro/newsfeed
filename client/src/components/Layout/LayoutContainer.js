import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNews, login } from '../../actions/applicationActions';
import {
  addAuthor,
  addNews,
  clearSelectedNews,
  deleteNews,
  getAuthors,
  logoutUser,
  selectNewsId,
  updateNews
} from '../../actions/adminActions';
import SideMenu from '../Shared/SideMenu';

class LayoutContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {children} = this.props;

    let childComponent = React.cloneElement(children, this.props);

    return (
      <div className='Layout'>
        <div className='backdrop'/>
        <SideMenu children={childComponent}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    application,
    routing,
    user,
    data
  } = state;
  return {
    application,
    routing,
    user,
    data
  };
}

const mapDispatchToProps = (dispatch) => {

  return {
    getNews: () => dispatch(getNews()),
    login: credentials => dispatch(login(credentials)),
    getAuthors: () => dispatch(getAuthors()),
    postAuthor: payload => dispatch(addAuthor(payload)),
    deleteNews: id => dispatch(deleteNews(id)),
    selectNewsId: id => dispatch(selectNewsId(id)),
    clearSelectedNews: () => dispatch(clearSelectedNews()),
    addNews: payload => dispatch(addNews(payload)),
    updateNews: payload => dispatch(updateNews(payload)),
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
