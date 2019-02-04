import React, {Component} from 'react';
import {Link} from 'react-router';

export default class LinkButton extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    let queryString = this.props.location.search ? this.props.location.search : '';
    let linkClass = this.props.linkClass ? this.props.linkClass : '';

    return (
      <Link to={this.props.linkRoute + queryString} className={linkClass} onClick={this.props.onClick}>
        {this.props.children}
      </Link>
    );

  };
}
