import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from '../../styles/Admin.scss';
import Button from '../Shared/Button/Button';
import routes from '../../constants/routes';

export default class AdminConsole extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h1>Here you can:</h1>
      <ul>
        <li>Add users</li>
        <li>Create, update or delete news</li>
        <li>Create, update or delete authors</li>
        <li>End your session</li>
      </ul>
      <h1>Actions</h1>
      <div className={styles.actionWrapper}>
        <Link><Button label={'Add Users'} raised/></Link>
        <Link><Button label={'Logout'} raised color={'secondary'}/></Link>
        <Link to={routes.newsAdmin}><Button label={'News CRUD'} raised/></Link>
        <Link to={routes.authors}><Button label={'Authors CRUD'} raised color={'secondary'}/></Link>
      </div>
    </div>);
  }
}
