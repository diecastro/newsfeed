import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Loading from '../../Shared/Loading';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import styles from '../../../styles/Admin.scss';
import AuthorForm from './AuthorForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import actionTypes from '../../../constants/actionTypes';

class AuthorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogIsVisible: false
    };
    this.toggleDialogVisibility = this.toggleDialogVisibility.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    !this.props.data.authors && this.props.getAuthors();
  }

  toggleDialogVisibility() {
    this.setState(prevState => ({
      dialogIsVisible: !prevState.dialogIsVisible
    }));
  }

  submitForm() {
    this.props.postAuthor({
      email: this.props.addAuthorForm.values.email,
      name: this.props.addAuthorForm.values.name,
      twitter: this.props.addAuthorForm.values.twitter
    }).then(result => {
      if (result.type === actionTypes.postAuthorSuccess) {
        this.props.getAuthors();
        this.toggleDialogVisibility();
      }
    });
  }

  render() {
    const {data} = this.props;
    const isFetching = data.isFetching;
    if (isFetching) {
      return <Loading/>;
    } else {
      return (
        <div>
          <Typography component={'h1'} variant={'body2'}>Authors List</Typography>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Twitter Handle</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.authors.map(author => (
                  <TableRow key={author._id}>
                    <TableCell>
                      {author.name}
                    </TableCell>
                    <TableCell>
                      {author.email}
                    </TableCell>
                    <TableCell>
                      {author.twitter}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <Fab color='primary' aria-label='Add' className={styles.fabAdd} onClick={this.toggleDialogVisibility}>
            <AddIcon/>
          </Fab>
          {this.state.dialogIsVisible &&
          <AuthorForm
            isFetching={isFetching}
            onSubmit={this.submitForm}
            closeDialog={this.toggleDialogVisibility}
            isVisible={this.state.dialogIsVisible}
            submitError={data.error}
          />}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    addAuthorForm: state.form.addAuthorForm
  };
};
export default connect(mapStateToProps, {})(withRouter(AuthorPage));
