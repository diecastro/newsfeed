import fetchMock from 'fetch-mock';
import api, {CALL_API} from '../../middleware/api';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import messages from '../../constants/messages';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

(function (glob) {
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

  glob.localStorage = mockStorage();
  glob.sessionStorage = mockStorage();
}(typeof window !== 'undefined' ? window : global));

describe('middleware: api', () =>{

  let store, next;
  let action;
  let requestType = 'ON_REQUEST';
  let errorType = 'ON_ERROR';
  let successType = 'ON_SUCCESS';
  let endpoint = 'version';

  beforeEach(() =>{
    store = mockStore;
    next = jest.fn();
    action = {
      [CALL_API]: {
        method: 'GET',
        authenticated: true,
        endpoint: endpoint,
        types: [requestType, successType, errorType]
      }
    };
  });

  afterEach(() =>{
    fetchMock.restore();
  });

  describe('Error: ', () =>{

    describe('No Token: ', () =>{

      it('should return errorType and error message', done =>{

        localStorage.removeItem('pa-apply-token');

        let promise = api(store)(next)(action);

        promise.then(()=> {
          expect(next.mock.calls[1][0].error).toBe('No token saved');
          expect(next.mock.calls[1][0].type).toBe(errorType);
          done();
        });

      });

    });

    describe('Unknown Error: ', () =>{

      beforeEach(() =>{

        localStorage.setItem('pa-apply-token', 'someToken');
        fetchMock.mock({
          name: 'route',
          matcher: global.serverBaseUrl + endpoint,
          response: {number: 500, throws: true}
        });

      });

      it('should return errorType and general error message: "There was an error."', done =>{

        let promise = api(store)(next)(action);

        promise.then(()=> {
          expect(next.mock.calls[next.mock.calls.length - 1][0].error).toEqual('There was an error');
          expect(next.mock.calls[next.mock.calls.length - 1][0].type).toEqual(errorType);
          done();
        });

      });

    });

    describe('Service Error: ', () =>{

      beforeEach(() =>{

        localStorage.setItem('pa-apply-token', 'someToken');
        fetchMock.mock({
          name: 'route',
          matcher: global.serverBaseUrl + endpoint,
          response: {ok: false, status: 404, body: {message: 'some service error'}}
        });

      });

      it('should return errorType and server error message', done =>{

        let promise = api(store)(next)(action);

        promise.then(()=> {
          expect(next.mock.calls[next.mock.calls.length - 1][0].error).toEqual('some service error');
          expect(next.mock.calls[next.mock.calls.length - 1][0].type).toEqual(errorType);
          done();
        });

      });

    });

  });

  describe('when action is without CALL_API', () =>{

    it('passes the action to next middleware', () =>{
      action = {type: 'not-CALL_API'};
      api(store)(next)(action);
      expect(next).toBeCalled();
      expect(next.mock.calls[0][0].type).toEqual(action.type);
    });

  });

  describe('when action is with CALL_API', () =>{

    beforeEach(() =>{

      localStorage.setItem('pa-apply-token', 'someToken');
      fetchMock.mock({
        name: 'route',
        matcher: global.serverBaseUrl + endpoint,
        response: {body: {status: 'ok'}}
      });

    });

    it('dispatch successType with response when success', done =>{

      let apiPromise = api(store)(next)(action);

      apiPromise.then(()=> {
        expect(next).lastCalledWith({'authenticated': true, 'response': {'status': 'ok'}, 'type': 'ON_SUCCESS'});
        done();
      });

    });

  });

  describe('when action is with CALL_API and response is 204', () =>{

    beforeEach(() =>{

      localStorage.setItem('pa-apply-token', 'someToken');
      fetchMock.mock({
        name: 'route',
        matcher: global.serverBaseUrl + endpoint,
        response: {status: 204, body: null}
      });

    });

    it('dispatch successType with response when success', done =>{

      let apiPromise = api(store)(next)(action);

      apiPromise.then(()=> {
        expect(next).lastCalledWith({'authenticated': true, 'response': '', 'type': 'ON_SUCCESS'});
        done();
      });

    });
  });

  describe('when action is with CALL_API and response is 400', () =>{

    beforeEach(() =>{

      localStorage.setItem('pa-apply-token', 'someToken');
      fetchMock.mock({
        name: 'route',
        matcher: global.serverBaseUrl + endpoint,
        response: { status: 400, body: {message: {error_type:'Validation', error_message:'Option.name: This value is already used.'}}}
      });

    });

    it('dispatch successType with response when success', done =>{

      let apiPromise = api(store)(next)(action);

      apiPromise.then(()=> {
        expect(next).lastCalledWith({'error': {'error_message': 'Option.name: This value is already used.', 'error_type': 'Validation'}, 'type': 'ON_ERROR'});
        done();
      });

    });

  });

  describe('when action is with CALL_API and response is 403', () =>{

    beforeEach(() =>{

      localStorage.setItem('pa-apply-token', 'someToken');
      fetchMock.mock({
        name: 'route',
        matcher: global.serverBaseUrl + endpoint,
        response: {status: 403, body: null}
      });

    });

    it('dispatch successType with response when success', done =>{

      let apiPromise = api(store)(next)(action);

      apiPromise.then(()=> {
        expect(next).lastCalledWith({'error': 'There was an error', 'type': 'ON_ERROR'});
        done();
      });

    });
  });

  describe('when action is with CALL_API and response is 413', () =>{

    beforeEach(() =>{

      localStorage.setItem('pa-apply-token', 'someToken');
      fetchMock.mock({
        name: 'route',
        matcher: global.serverBaseUrl + endpoint,
        response: { status: 413, body: {error_type:'basic', error_message:'ERROR: Upload too large: please try a smaller size'} }
      });

    });

    it('should status type and display message', done =>{

      const apiPromise = api(store)(next)(action);

      apiPromise.then(()=> {
        expect(next).lastCalledWith({'error': messages.tooLarge.message, 'type': 'ON_ERROR'});
        done();
      });

    });
  });

  describe('when action is with CALL_API but calling not calling an authenticated endpoint,', () =>{

    beforeEach(() =>{

      fetchMock.mock({
        name: 'route',
        matcher: global.serverBaseUrl + endpoint,
        response: {body: {status: 'ok'}}
      });

    });

    it('dispatch successType with response when success', done =>{

      action[CALL_API].authenticated = false;
      let apiPromise = api(store)(next)(action);

      apiPromise.then(()=> {
        expect(next).lastCalledWith({'authenticated': false, 'response': {'status': 'ok'}, 'type': 'ON_SUCCESS'});
        done();
      });

    });

  });

  describe('when action is with CALL_API with no body payload for POST,', () =>{

    beforeEach(() =>{

      localStorage.setItem('pa-apply-token', 'someToken');

      fetchMock.mock({
        name: 'route',
        matcher: global.serverBaseUrl + endpoint,
        response: {body: {status: 'ok'}}
      });

    });

    it('dispatch successType with response when success', done =>{

      action[CALL_API].authenticated = true;
      action[CALL_API].body = {test:'field'};
      action[CALL_API].method = 'POST';
      action[CALL_API].encrypted = true;
      let apiPromise = api(store)(next)(action);

      apiPromise.then(()=> {
        expect(next).lastCalledWith({'authenticated': true, 'response': {'status': 'ok'}, 'type': 'ON_SUCCESS'});
        done();
      });

    });

    it('dispatch successType with response when success without body', done =>{

      action[CALL_API].authenticated = true;
      action[CALL_API].body = undefined;
      action[CALL_API].method = 'POST';
      let apiPromise = api(store)(next)(action);

      apiPromise.then(()=> {
        expect(next).lastCalledWith({'authenticated': true, 'response': {'status': 'ok'}, 'type': 'ON_SUCCESS'});
        done();
      });

    });

  });

  describe('when action is with CALL_API with Json body payload for POST/PUT/PATCH,', () =>{

    beforeEach(() =>{

      localStorage.setItem('pa-apply-token', 'someToken');

      fetchMock.mock({
        name: 'route',
        matcher: global.serverBaseUrl + endpoint,
        response: {body: {status: 'ok'}}
      });

    });

    it('dispatch successType with response when success', done =>{

      let someJsonObject =  {name: 'someName', emails: ['emailAddress1', 'emailAddress2']};

      action[CALL_API].authenticated = true;
      action[CALL_API].body = someJsonObject;
      let apiPromise = api(store)(next)(action);

      apiPromise.then(()=> {
        expect(next).lastCalledWith({'authenticated': true, 'response': {'status': 'ok'}, 'type': 'ON_SUCCESS'});
        done();
      });

    });

  });

  describe('when action is with CALL_API without Json body payload for POST/PUT/PATCH,', () =>{

    beforeEach(() =>{

      localStorage.setItem('pa-apply-token', 'someToken');

      fetchMock.mock({
        name: 'route',
        matcher: global.serverBaseUrl + endpoint,
        response: {body: {status: 'ok'}}
      });

    });

    it('dispatch successType with response when success', done =>{

      let someTextBody = 'name=someName&email=someEmailAddress';

      action[CALL_API].authenticated = true;
      action[CALL_API].body = someTextBody;
      let apiPromise = api(store)(next)(action);

      apiPromise.then(()=> {
        expect(next).lastCalledWith({'authenticated': true, 'response': {'status': 'ok'}, 'type': 'ON_SUCCESS'});
        done();
      });

    });

  });

});
