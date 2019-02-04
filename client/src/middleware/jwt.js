import jwtDecode from 'jwt-decode';

export default function jwt({dispatch}) {

  return (next) => (action) => {

    if (typeof action === 'object') {

      // if (action.type !== actionTypes.logoutRequest &&
      //   action.type !== actionTypes.logoutSuccess &&
      //   action.type !== actionTypes.expireTokenRequest &&
      //   action.type !== actionTypes.expireTokenSuccess) {
      //   if (localStorage.getItem('pa-apply-token')) {
      //
      //     const tokenExpiration = jwtDecode(localStorage.getItem('pa-apply-token')).exp;
      //
      //     if (tokenExpiration && (tokenExpiration < Date.now() / 1000)) {
      //       dispatch(logoutUser());
      //     }
      //   }
      // }


    }
    return next(action);
  };
}
