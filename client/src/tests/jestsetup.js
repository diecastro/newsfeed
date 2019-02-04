require('isomorphic-fetch');

function mockStorage() {
  let storage = {};
  return {
    setItem: function (key, value) {
      storage[key] = value || '';
    },
    getItem: function (key) {
      return storage[key];
    },
    removeItem: function (key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function (i) {
      let keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}

class mockJsEncrypt {
  setPublicKey() {

  }

  encrypt() {
    return 'encrypted';
  }
}

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

import React from 'react';
import { mount, render, shallow } from 'enzyme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import api from '../middleware/api';

const middleware = [thunk, api];

window.scrollTo = () => { };

global.mockStore = configureStore(middleware);

global.Provider = Provider;
global.MuiThemeProvider = MuiThemeProvider;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;
global.localStorage = mockStorage();
global.sessionStorage = mockStorage();
global.JSEncrypt = mockJsEncrypt;
global.siteKey = '1234';
global.productionEnvironment = 'false';
global.twoFactorAuth = 'true';
global.sinon = require('sinon');
global.serverBaseUrl = 'http://localhost:3002/api/';
global.serverDomainUrl = 'http://localhost:3002/';
global.muiTheme = createMuiTheme({
  typography: {
    fontSize: 16,
    fontFamily: ['"Work Sans"', 'sans-serif'].join(','),
    useNextVariants: true,
    body1: {
      fontSize: 16,
      color: '#8a8c8c',
      fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'].join(','),
      fontWeight: 600
    }
  },
  overrides: {
    MuiFormLabel: {
      root: {
        fontSize: 15,
        lineHeight: 1
      }
    },
    MuiInput: {
      root: {
        fontSize: 15,
        lineHeight: 1.2,
        display: 'inline-flex',
        position: 'relative',
        flexDirection: 'column',
        verticalAlign: 'top'
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: 12
      }
    },
    MuiFormControlLabel: {
      root: {
        color: '#8a8c8c'
      }
    },
    MuiSelect: {
      root: {
        marginTop: 12
      },
      selectMenu: {
        paddingTop: 10,
        minHeight: 1
      }
    },
    MuiDialog: {
      paper: {
        overflowY: 'visible!important'
      }
    }
  },
  palette: {
    primary: {
      '50': '#e3f2fd',
      '100': '#888C8D',
      '200': '#90caf9',
      '300': '#3e3935',
      '400': '#42a5f5',
      '500': '#FD7C24',
      '600': '#1e88e5',
      '700': '#FD7C24',
      '800': '#1565c0',
      '900': '#0d47a1',
      A100: '#82b1ff',
      A200: '#448aff',
      A400: '#2979ff',
      A700: '#FD7C24',
      contrastDefaultColor: 'light'
    },
    secondary: {
      main: '#FD7C24'
    },
    button: {
      backgroundColor: '#FD7C24'
    }
  }
});
global._ = require('lodash');
global.mockComponentProperties = require('./utils/mockComponentProperties');
global.navigator = global.navigator || {};
global.btoa = function (value) {
  return Buffer.from(value.toString()).toString('base64');
};
global.applicationVersion = '1.2.3';
global.globalAgentId = '17675';
global.globalAgent = {
  'id': 17675,
  'name': 'Pay Anywhere Corporate',
  'phone': '877-387-5640',
  'fax': null,
  'address': '250 Stephenson Hwy',
  'city': 'Troy',
  'state': 'MI',
  'zip': '48083',
  'status': 'A',
  'tabletEnabled': true,
  'freeEquipmentLimit': null,
  'programFreeEquipment': true,
  'freeAgentTerminal': false,
  'department': 'Pay Anywhere',
  'regionalManager': 'Inside Sales Manager',
  'nationalManager': 'NAB',
  'sendMerchantEmail': true,
  'brandAcronym': 'PA',
  'brandFirstData': 0,
  'brandGlobal': 1,
  'brandEpx': 1,
  'enrollmentNeedsAgentCompletion': false,
  'email': 'cssales@nabancard.com'
};

global.globalBrand = {
  'id': 9,
  'brandName': 'Pay Anywhere',
  'brandAcronym': 'PA',
  'displayName': 'PayAnywhere',
  'displayAddress': '250 Stephenson Hwy',
  'displayCity': 'Troy',
  'rgbColor': 'e67431  ',
  'logoImageBit': 'iVBORw0KGgoAAAANSUhEUgAAAEsAAAAxCAYAAACS91RNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGQjdGMTE3NDA3MjA2ODExODIyQUIxRkJGMDQ3QzA4NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOTE3RDVGQTVFNjExMUU2OTg4MkU3ODYwNkI1MTQ5OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOTE3RDVGOTVFNjExMUU2OTg4MkU3ODYwNkI1MTQ5OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZjVmMWQ4OTQtYzJkNi00MDQ5LWI5YzEtYTY5MjdjNTkwZjNlIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDc4ZDlhMmMtYTA5Ny0xMTc5LThjYWIt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'
};

console.warn = jest.fn();

export default mockStorage;
