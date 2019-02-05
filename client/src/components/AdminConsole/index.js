import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from '../../styles/Admin.scss';
import Button from '../Shared/Button/Button';
import routes from '../../constants/routes';

export default class AdminConsole extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logoutUser();
    this.props.router.push(routes.news);
  }

  render() {
    return (<div>
      <h1>Here you can:</h1>
      <ul>
        <li>Manage your news</li>
        <li>Manage your authors</li>
        <li>End your session</li>
      </ul>
      <h1>Actions</h1>
      <div className={styles.actionWrapper}>
        <Link><Button label={'Logout'} raised color={'secondary'} onClick={this.logout}/></Link>
        <Link to={routes.newsAdmin}><Button label={'News'} raised/></Link>
        <Link to={routes.authors}><Button label={'Authors'} raised color={'secondary'}/></Link>
      </div>
    </div>);
  }
}
