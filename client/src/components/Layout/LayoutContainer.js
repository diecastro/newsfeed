import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions/applicationActions';
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
    routing
  } = state;

  return {
    application,
    routing
  };
}

const mapDispatchToProps = (dispatch) => {

  return {
    getNews: () => dispatch(getNews())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
