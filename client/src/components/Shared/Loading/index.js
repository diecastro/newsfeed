import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='loadingIndicator'>
        <LinearProgress mode='indeterminate' color='primary'/>
      </div>
    );
  }
}

Loading.defaultProps = {
  fullLoader: true
};
