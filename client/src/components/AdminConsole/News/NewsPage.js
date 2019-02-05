import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import moment from 'moment';
import Fab from '@material-ui/core/Fab';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/DeleteForever';
import Create from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import Loading from '../../Shared/Loading';
import IconButton from '../../Shared/Button/IconButton';
import styles from '../../../styles/Admin.scss';
import actionTypes from '../../../constants/actionTypes';
import DeleteDialog from './DeleteDialog';

// import AuthorForm from './AuthorForm';

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogIsVisible: false
    };
    this.toggleDialogVisibility = this.toggleDialogVisibility.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.openDeleteDialog = this.openDeleteDialog.bind(this);
    this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
    this.deleteAction = this.deleteAction.bind(this);
  }

  componentDidMount() {
    !this.props.data.authors && this.props.getAuthors();
    !this.props.application.data && this.props.getNews();
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

  openDeleteDialog(value) {
    this.setState({selectedId: value, deleteDialogVisible: true});
  }

  closeDeleteDialog() {
    this.setState({deleteDialogVisible: false});
  }

  deleteAction() {
    this.props.deleteNews({id: this.state.selectedId}).then(result => {
      if (result.type === actionTypes.deleteNewsSuccess) {
        this.closeDeleteDialog();
        this.props.getNews();
      }
    });
  }

  render() {
    const {data, application} = this.props;
    const isFetching = data.isFetching || application.isFetching;
    if (isFetching) {
      return <Loading/>;
    } else {
      return (
        <div>
          <Typography component={'h1'} variant={'body2'}>News List</Typography>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell/>
                </TableRow>
              </TableHead>
              <TableBody>
                {application.data.docs.map(news => (
                  <TableRow key={news._id}>
                    <TableCell>
                      {news.title}
                    </TableCell>
                    <TableCell>
                      {news.preview}
                    </TableCell>
                    <TableCell>
                      {news.author.name}
                    </TableCell>
                    <TableCell>
                      {moment(news.updatedAt).format('MM-DD-Y, h:mm:ss a')}
                    </TableCell>
                    <TableCell className='flex'>
                      <IconButton>
                        <Create/>
                      </IconButton>
                      <IconButton clickHandler={this.openDeleteDialog} value={news._id}><Delete/></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <Fab color='primary' aria-label='Add' className={styles.fabAdd} onClick={this.toggleDialogVisibility}>
            <AddIcon/>
          </Fab>
          {this.state.deleteDialogVisible &&
          <DeleteDialog
            isVisible={this.state.deleteDialogVisible}
            closeAction={this.closeDeleteDialog}
            deleteAction={this.deleteAction}
          />
          }
          {/*{this.state.dialogIsVisible &&*/}
          {/*<AuthorForm*/}
          {/*isFetching={isFetching}*/}
          {/*onSubmit={this.submitForm}*/}
          {/*closeDialog={this.toggleDialogVisibility}*/}
          {/*isVisible={this.state.dialogIsVisible}*/}
          {/*submitError={data.error}*/}
          {/*/>}*/}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    addNewsForm: state.form.addNewsForm
  };
};
export default connect(mapStateToProps, {})(withRouter(NewsPage));
