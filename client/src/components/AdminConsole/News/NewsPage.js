import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import moment from 'moment';
import Fab from '@material-ui/core/Fab';
import { Dialog, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import Delete from '@material-ui/icons/DeleteForever';
import Create from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import Loading from '../../Shared/Loading';
import IconButton from '../../Shared/Button/IconButton';
import styles from '../../../styles/Admin.scss';
import actionTypes from '../../../constants/actionTypes';
import DeleteDialog from '../../Shared/DeleteDialog';
import NewsForm from './NewsForm';
import FileUtil from '../../../util/FileUtil';

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogIsVisible: false
    };
    this.closeDialogVisibility = this.closeDialogVisibility.bind(this);
    this.openDialogVisibility = this.openDialogVisibility.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.openDeleteDialog = this.openDeleteDialog.bind(this);
    this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
    this.deleteAction = this.deleteAction.bind(this);
    this.selectId = this.selectId.bind(this);
  }

  componentDidMount() {
    !this.props.data.authors && this.props.getAuthors();
    !this.props.application.data && this.props.getNews();
  }

  closeDialogVisibility() {
    this.setState({
      dialogIsVisible: false
    });
    this.props.clearSelectedNews();
  }

  openDialogVisibility() {
    this.setState({
      dialogIsVisible: true
    });
  }

  submitForm() {
    const that = this;
    FileUtil.getBase64(that.props.addNewsForm.values.files[0].file).then((result) => {
      const payload = {
        image: result.base64,
        title: that.props.addNewsForm.values.title,
        author: that.props.addNewsForm.values.author,
        description: that.props.addNewsForm.values.description,
        preview: that.props.addNewsForm.values.preview
      };
      that.props.addNews(payload);
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

  selectId(value) {
    this.props.selectNewsId(value);
    this.openDialogVisibility();
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
                      <IconButton clickHandler={this.selectId} value={news._id}><Create/></IconButton>
                      <IconButton clickHandler={this.openDeleteDialog} value={news._id}><Delete/></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <Fab color='primary' aria-label='Add' className={styles.fabAdd} onClick={this.openDialogVisibility}>
            <AddIcon/>
          </Fab>
          {this.state.deleteDialogVisible &&
          <DeleteDialog
            isVisible={this.state.deleteDialogVisible}
            closeAction={this.closeDeleteDialog}
            deleteAction={this.deleteAction}
          />
          }
          {this.state.dialogIsVisible &&
          <NewsForm
            isVisible={this.state.dialogIsVisible}
            authors={this.props.data.authors}
            closeAction={this.closeDialogVisibility}
            onSubmit={this.submitForm}
            selectedNews={this.props.application.selectedNews}
            isUpdate={!!this.props.application.selectedNews}
          />
          }
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    addNewsForm: state.form.NewsForm
  };
};
export default connect(mapStateToProps, {})(withRouter(NewsPage));
