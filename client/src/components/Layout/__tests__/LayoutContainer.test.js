import React from 'react';
import ConnectedLayoutContainer from '../LayoutContainer';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actionTypes from '../../../constants/actionTypes';
import api from '../../../middleware/api';
import _ from 'lodash';

const middlewares = [thunk, api];
const mockStore = configureStore(middlewares);

describe('components/Layout/LayoutContainer', () => {

  let shoppingBag = {test: 123, finalized: false, accessories: {}, plan: {planCode: 0}};
  let stubs = {};

  let commonProperties = {
    title: 'myLayout',
    syncBag: jest.fn(),
    removeAllItemsFromBag: jest.fn(),
    clearNotification: jest.fn(),
    checkTokenExpiration: jest.fn(),
    toggleRefreshTokenDialog: jest.fn(),
    refreshToken: jest.fn(),
    logoutUser: jest.fn(),
    openDialog: jest.fn(),
    getProspect: jest.fn(),
    setProspectId: jest.fn(),
    toggleVisibilitySignInForm: jest.fn(),
    router: [],
    auth: {
      isAuthenticated: false,
      newToken: true
    }
  };

  let auth = {
    isAuthenticated: false,
    isFetching: false,
    loginError: null,
    menuActive: false,
    newToken: null,
    signupError: null,
    tokenAutoRenew: false,
    tokenTermsRenew: null
  };

  const startState = {
    userExperience: {
      title: 'myLayout',
      notifications: [],
      dispatch: stubs.dispatch,
      isUpdatingCart: false,
      cart: {
        productIds: []
      }
    },
    shoppingBag,
    auth,
    application: {
      threatMetrixTemplate: 'some text'
    }
  };

  let expectedActions =
    [{
      type: actionTypes.syncBagRequest
    }];

  let store, wrapper;

  beforeEach(() => {
    commonProperties.location = {query: {}, pathname: '/somePath'};
    commonProperties.children = <div className='someChild'/>;
  });

  afterEach(function () {
    _.invokeMap(stubs, 'restore');
  });

  describe('Connected LayoutContainer', () => {

    beforeEach(() => {
      store = mockStore({...startState});
      wrapper = shallow(<ConnectedLayoutContainer store={store} {...commonProperties}/>).shallow();
    });

    it('should render correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('renders the connected component', () => {
      expect(wrapper.find('.Layout').length).toEqual(1);
    });

    it('should not render backdrop class', () => {
      const startState = {
        userExperience: {
          title: 'myLayout',
          notifications: [],
          dispatch: stubs.dispatch,
          megamenu: true,
          isUpdatingCart: false
        },
        shoppingBag,
        auth,
        application: {
          threatMetrixTemplate: 'some text'
        }
      };
      store = mockStore({...startState});
      const wrapper = shallow(<ConnectedLayoutContainer store={store} {...commonProperties} />).shallow();
      expect(wrapper.find('.backdrop.hidden').length).toBeFalsy();
    });

    it('should render backdrop class', () => {
      const startState = {
        userExperience: {
          title: 'myLayout',
          notifications: [],
          dispatch: stubs.dispatch,
          isUpdatingCart: false
        },
        application: {status: 'finalized', threatMetrixTemplate: 'some text'},
        location: {query: {}, pathname: '/someOtherPath'},
        shoppingBag,
        auth
      };
      store = mockStore({...startState});
      const wrapper = shallow(<ConnectedLayoutContainer store={store} {...commonProperties} />).shallow();
      expect(wrapper.find('.backdrop.hidden').length).toBeTruthy();
    });

    describe('componentWillReceiveProps', () => {

      it('should complete', () => {
        let nextProps = {
          shoppingBag: {
            test: 456,
            finalized: false
          },
          userExperience: {
            isUpdatingCart: true
          },
          application: {status: 'finalized', threatMetrixTemplate: 'some text'},
          location: {query: {}, pathname: '/someOtherPath'},
          notifications: [{type: 'Success', message: 'someSuccess'}],
          auth
        };
        wrapper.instance().componentWillReceiveProps(nextProps);
        expect(store.getActions()).toEqual([
          {type: actionTypes.getThreatMetrixTagRequest},
          {type: actionTypes.syncBagRequest},
          {type: actionTypes.updateCartSuccess}
        ]);
      });

      it('should call syncBag if the shoppingBag changes', () => {
        let nextProps = {
          shoppingBag: {
            test: 456,
            finalized: false
          },
          userExperience: {
            isUpdatingCart: true
          },
          application: {status: 'finalized', threatMetrixTemplate: 'some text'},
          location: {query: {}, pathname: '/someOtherPath'},
          notifications: [{type: 'Success', message: 'someSuccess'}],
          auth
        };
        wrapper.instance().componentWillReceiveProps(nextProps);
        expect(store.getActions()).toEqual([
          {type: actionTypes.getThreatMetrixTagRequest},
          {type: actionTypes.syncBagRequest},
          {type: actionTypes.updateCartSuccess}
        ]);
      });

      it('should call syncBag if the shoppingBag changes', () => {
        let nextProps = {
          shoppingBag: {
            test: 456,
            finalized: false
          },
          userExperience: {
            isUpdatingCart: true
          },
          application: {status: '', threatMetrixTemplate: 'some text'},
          location: {query: {}, pathname: '/someOtherPath'},
          notifications: [{type: 'Success', message: 'someSuccess'}],
          auth
        };
        wrapper.instance().componentWillReceiveProps(nextProps);
        expect(store.getActions()).toEqual([
          {type: actionTypes.getThreatMetrixTagRequest},
          {type: actionTypes.syncBagRequest},
          {type: actionTypes.updateCartSuccess}
        ]);
      });

    });

    it('should render the footer component', () => {
      expect(wrapper.find('Footer').length).toEqual(1);
    });

    describe('mapDispatchToProps actions', () => {

      beforeEach(() => {
        commonProperties.location = {query: {}};
        store = mockStore({...startState});
        wrapper = shallow(<ConnectedLayoutContainer store={store} {...commonProperties} />);
      });

      it('calls syncBag action', () => {

        wrapper.props().syncBag({shoppingBag: 456});
        const actualActionTypes = store.getActions();
        expect(actualActionTypes).toEqual(expectedActions);
      });

      describe('clearApplicationStorage', () => {

        it('calls removeAllItemsFromBag action with clear', () => {

          wrapper.props().clearApplicationStorage();
          const actualActionTypes = store.getActions();
          expect(actualActionTypes).toEqual([
            {
              type: actionTypes.clearAllItems
            }
          ]);
        });

      });

      it('calls clearNotification action', () => {
        let expectedActions =
          [{
            notificationIndex: 1,
            type: actionTypes.clearNotification
          }];
        wrapper.props().clearNotification(1);
        const actualActionTypes = store.getActions();
        expect(actualActionTypes).toEqual(expectedActions);
      });

      it('calls checkTokenExpiration', () => {

        wrapper.props().checkTokenExpiration();
        const actualActionTypes = store.getActions();
        expect(actualActionTypes).toEqual([]);
      });

      it('calls toggleRefreshTokenDialog', () => {
        const expectedActions = [
          {
            type: actionTypes.toggleRefreshTokenDialog,
            value: true
          }
        ];
        wrapper.props().toggleRefreshTokenDialog(true);
        const actualActionTypes = store.getActions();
        expect(actualActionTypes).toEqual(expectedActions);
      });

      it('calls refreshToken', () => {
        const expectedActions = [
          {
            type: actionTypes.refreshTokenRequest
          }
        ];
        wrapper.props().refreshToken();
        const actualActionTypes = store.getActions();
        expect(actualActionTypes).toEqual(expectedActions);
      });

      it('calls logoutUser', () => {
        const expectedActions = [
          {
            isAuthenticated: true,
            isFetching: true,
            type: actionTypes.logoutRequest
          },
          {
            type: actionTypes.expireTokenRequest
          },
          {
            isAuthenticated: false,
            isFetching: false,
            type: actionTypes.logoutSuccess
          }
        ];
        wrapper.props().logoutUser();
        const actualActionTypes = store.getActions();
        expect(actualActionTypes).toEqual(expectedActions);
      });

      it('calls openDialog', () => {
        const expectedActions = [
          {
            payload: {activeDialog: 'dialog', isDialogOpen: true},
            type: actionTypes.openDialog
          }
        ];
        wrapper.props().openDialog('dialog');
        const actualActionTypes = store.getActions();
        expect(actualActionTypes).toEqual(expectedActions);
      });

      it('calls toggle', () => {
        const expectedActions = [
          {type: 'TOGGLE_VISIBILITY_SIGNIN_FORM'}
        ];
        wrapper.props().toggleVisibilitySignInForm();
        const actualActionTypes = store.getActions();
        expect(actualActionTypes).toEqual(expectedActions);
      });

    });

    describe('refreshToken', () => {

      const expectedActions = [{type: actionTypes.getThreatMetrixTagRequest},
        {
          'type': 'REFRESH_TOKEN_REQUEST'
        }
      ];

      it('should call functions', () => {
        wrapper.instance().refreshToken();
        const actualActionTypes = store.getActions();
        expect(actualActionTypes).toEqual(expectedActions);
      });

      it('should call functions with token', () => {
        commonProperties.auth.newToken = true;
        wrapper.instance().refreshToken();
        const actualActionTypes = store.getActions();
        expect(actualActionTypes).toEqual(expectedActions);
      });

    });

    describe('handleTokenClose', () => {

      const expectedActionsNoToken = [
        {type: actionTypes.getThreatMetrixTagRequest},
        {
          'isAuthenticated': true,
          'isFetching': true,
          'type': 'LOGOUT_REQUEST'
        },
        {
          type: actionTypes.expireTokenRequest
        },
        {
          'isAuthenticated': false,
          'isFetching': false,
          'type': 'LOGOUT_SUCCESS'
        },
        {
          'payload': {
            'activeDialog': 'auth',
            'isDialogOpen': true
          },
          'type': 'DIALOG_OPEN'
        },
        {
          'type': 'TOGGLE_VISIBILITY_SIGNIN_FORM'
        }
      ];

      const expectedActionsToken = [
        {type: actionTypes.getThreatMetrixTagRequest},
        {
          'type': 'TOGGLE_REFRESH_TOKEN_DIALOG',
          'value': false
        },
        {
          'isAuthenticated': true,
          'isFetching': true,
          'type': 'LOGOUT_REQUEST'
        },
        {
          type: actionTypes.expireTokenRequest
        },
        {
          'isAuthenticated': false,
          'isFetching': false,
          'type': 'LOGOUT_SUCCESS'
        },
        {
          'payload':
            {
              'activeDialog': 'auth',
              'isDialogOpen': true
            },
          'type': 'DIALOG_OPEN'
        },
        {
          'type': 'TOGGLE_VISIBILITY_SIGNIN_FORM'
        }
      ];

      it('should call logoutUser', () => {
        wrapper.instance().handleTokenClose();
        const actualActionTypes = store.getActions();
        expect(actualActionTypes).toEqual(expectedActionsNoToken);
      });

      it('should call logoutUser with token', () => {
        localStorage.setItem('pa-apply-token', 'someToken');
        wrapper.instance().handleTokenClose();
        const actualActionTypes = store.getActions();
        expect(actualActionTypes).toEqual(expectedActionsToken);
      });

    });

    describe('checkToken', () => {

      it('should call checkTokenExpiration', () => {
        wrapper.instance().checkToken(commonProperties);
        const actualActionTypes = store.getActions();
        expect(actualActionTypes).toEqual([{type: actionTypes.getThreatMetrixTagRequest}]);
      });

    });

  });

  describe('Prospect Id ppid', () => {

    beforeEach(() => {
      commonProperties.location = {query: {ppid: '777'}, search: '?ppid=777'};
      store = mockStore({...startState});
      wrapper = shallow(<ConnectedLayoutContainer store={store} {...commonProperties}/>).shallow();
    });

    it('should render correct snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('renders the connected component', () => {
      expect(wrapper.find('.Layout').length).toEqual(1);
    });

  });

});
