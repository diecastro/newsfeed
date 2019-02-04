import React, { Component } from 'react';
import { connect } from 'react-redux';
import routes from '../../constants/routes';
import actionTypes from '../../constants/actionTypes';

const tokenCheck = 60000;

class LayoutContainer extends Component {

  constructor(props) {
    super(props);

    this.checkToken = this.checkToken.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
    this.handleTokenClose = this.handleTokenClose.bind(this);

  }

  componentWillMount() {

    this.props.getThreatMetrixTags();

    let that = this;
    let prospectQueryId = this.props.location.query && this.props.location.query.ppid ? this.props.location.query.ppid : null;

    if (!this.props.userExperience.prospectId && prospectQueryId) {
      this.props.clearApplicationStorage().then(() => {
        that.props.setProspectId(prospectQueryId);
        that.props.getProspect(prospectQueryId);
      });
    }

  }

  componentDidMount() {

    if (this.props.auth.isAuthenticated) {
      // Handling page refresh
      this.checkToken(this.props);
    }

  }

  componentWillReceiveProps(nextProps) {

    if (!this.props.auth.isAuthenticated && nextProps.auth.isAuthenticated) {
      this.checkToken(nextProps);
    }

    let shoppingBagChanges = (this.props.shoppingBag.plan !== nextProps.shoppingBag.plan || this.props.shoppingBag.accessories !== nextProps.shoppingBag.accessories || this.props.shoppingBag.equipment !== nextProps.shoppingBag.equipment);
    let shoppingCartChanges = (this.props.userExperience.isUpdatingCart !== nextProps.userExperience.isUpdatingCart);
    if (shoppingBagChanges && !this.props.shoppingBag.finalized) {
      this.props.syncBag(nextProps.shoppingBag);
    }

    if (shoppingCartChanges) {
      this.props.performCartAction();
      this.props.cartUpdateSuccess();
    }

    if (this.props.userExperience.requestNewToken !== nextProps.userExperience.requestNewToken &&
      nextProps.userExperience.requestNewToken === true) {
      this.props.toggleRefreshTokenDialog(true);
    }

    if (this.props.userExperience.requestNewToken !== nextProps.userExperience.requestNewToken &&
      nextProps.userExperience.requestNewToken === false) {
      this.props.toggleRefreshTokenDialog(false);
    }
  }

  refreshToken() {
    const that = this;
    this.props.refreshToken().then(() => {
      if (that.props.auth.newToken) {
        localStorage.setItem('pa-apply-token', that.props.auth.newToken);
      }
      this.props.toggleRefreshTokenDialog(false);
    });

  }

  handleTokenClose() {
    let token = localStorage.getItem('pa-apply-token');
    if (token) {
      this.props.toggleRefreshTokenDialog(false);
    }
    this.props.logoutUser();
    this.props.openDialog('auth');
    this.props.toggleVisibilitySignInForm();
    this.props.router.push(routes.shoppingBag);
  }

  checkToken(props) {
    props.checkTokenExpiration();
    setTimeout(() => {
      if (props.auth.isAuthenticated) {
        this.checkToken(props);
      }
    }, tokenCheck);
  }

  render() {

    const {children, userExperience, auth, application} = this.props;

    let childComponent = React.cloneElement(children, this.props);
    let refreshTokenDialog = auth.isAuthenticated &&
      <RefreshTokenDialog
        {...this.props}
        refreshToken={this.refreshToken}
        handleClose={this.handleTokenClose}
      />;

    return (
      <div className='Layout'>
        <div className={`backdrop ${userExperience.megamenu ? '' : 'hidden'}`}/>
        <Header
          title={userExperience.title}
          {...this.props}
        />
        {childComponent}
        {refreshTokenDialog}
        <Footer/>
        <div dangerouslySetInnerHTML={{__html: application.threatMetrixTemplate}}/>
      </div>
    );
  }
}

function mapStateToProps(state) {

  const {
    application,
    routing,
    shoppingBag,
    userExperience,
    auth
  } = state;

  return {
    application: application,
    shoppingBag: shoppingBag,
    notifications: state.userExperience.notifications,
    routing: routing,
    userExperience: userExperience,
    auth
  };
}

const mapDispatchToProps = (dispatch) => {

  return {

    syncBag: data => {
      dispatch(syncBag(data)).then(({response, type}) => {
        if (type === actionTypes.syncBagSuccess) {
          const existingKey = localStorage.getItem('applicationId');
          const key = existingKey !== response.data.externalKey ? response.data.externalKey : existingKey;
          localStorage.setItem('applicationId', key);
        }
      });
    },

    clearNotification: index => {
      dispatch(clearNotification(index));
    },

    performCartAction: () => {
      dispatch(performCartAction());
    },

    cartUpdateSuccess: () => {
      dispatch(cartUpdateSuccess());
    },

    checkTokenExpiration: () => {
      dispatch(checkTokenExpiration());
    },

    toggleRefreshTokenDialog: (flag) => {
      dispatch(toggleRefreshTokenDialog(flag));
    },

    refreshToken: () => {
      return dispatch(refreshToken());
    },

    logoutUser: () => {
      return dispatch(logoutUser());
    },

    openDialog: (activeDialog) => {
      dispatch(openDialog(activeDialog));
    },

    toggleVisibilitySignInForm: () => {
      dispatch(toggleVisibilitySignInForm());
    },

    setProspectId: (prospectId) => {
      dispatch(setProspectId(prospectId));
    },

    getProspect: (prospectId) => {
      dispatch(getProspect(prospectId));
    },

    clearApplicationStorage: () => {
      return new Promise((resolve, reject) => {
        dispatch(removeAllItemsFromBag(true));
        resolve();
      });
    },
    getThreatMetrixTags: () => dispatch(getThreatMetrixTags())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
