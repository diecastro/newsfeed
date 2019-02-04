import React, { Component } from 'react';
import OptionBox from '../Shared/OptionBox/OptionBox';

export default class SelectExperience extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let queryString = this.props.location.search ? this.props.location.search : '';

    return (
      <div>
        <div>
          <span>{'SELECT A USER EXPERIENCE'}</span>
          <OptionBox
              optionLabel='Selecting a plan first.'
              label='Start'
              href={'/plans' + queryString}
          />

          <OptionBox
              optionLabel='Selecting equipment first.'
              label='Start'
              href={'/products' + queryString}
          />
        </div>
      </div>
    );
  }
}

