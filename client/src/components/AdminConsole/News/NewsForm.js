import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, FieldArray, Field } from 'redux-form';
import SaveFile from '@material-ui/icons/SaveAlt';
import AttachedFile from '@material-ui/icons/AttachFile';
import CancelIcon from '@material-ui/icons/Cancel';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import FileInput from '../../Shared/Forms/FileInput';
import Validator from '../../../util/Validator';
import fileInputStyles from '../../../styles/FileInput.scss';
import styles from '../../../styles/Forms.scss';
import TextField from '../../Shared/Forms/TextField';
import SelectField from '../../Shared/Forms/SelectField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../Shared/Button/Button';

const validate = values => Validator.validateNewsForm(values);

class NewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: false
    };
    this.onDropRejected = this.onDropRejected.bind(this);
    this.onDropAccepted = this.onDropAccepted.bind(this);
  }

  onDropRejected() {
    this.setState({errorMessage: true});
  }

  onDropAccepted() {
    this.setState({errorMessage: false});
  }

  render() {
    const {handleSubmit} = this.props;
    const renderFiles = ({fields}) => (
      <div>
        <FileInput
          className={fileInputStyles.fileInput}
          classNameLabel={fileInputStyles.fileInputLabel}
          dropzoneOptions={{
            multiple: false,
            accept: 'image/jpeg, image/png',
            maxSize: 5000000
          }}
          onDropRejected={this.onDropRejected}
          onDropAccepted={this.onDropAccepted}
          name='newsImage'
          onDropFunction={(acceptedFiles, rejectedFiles, e) => {
            acceptedFiles.forEach(f => {
              fields.push({
                name: f.name,
                file: f,
                description: ''
              });
            });
          }}
        >
          <div className={fileInputStyles.dropZoneText}>
            <SaveFile/>
            <br/><br/>
            {'DRAG FILE HERE OR '}
            <span
              style={{cursor: 'pointer', textDecoration: 'underline'}}
            >{'BROWSE'}</span>
          </div>
        </FileInput>
        {this.state.errorMessage && <p className={'centerContent error'}>{'File size exceeds the limit'}</p>}
        {(fields.getAll()) ? fields.getAll().map((f, i) => {
          return (
            <div
              className={fileInputStyles.attachments}
              key={i}
            >
              <span><AttachedFile/></span>
              <span>{f.name}</span>
              <span onClick={() => fields.remove(i)}><CancelIcon/></span>
            </div>
          );
        }) : null}
      </div>
    );

    return (
      <Dialog open={this.props.isVisible} maxWidth={'md'} fullWidth>
        <DialogTitle>
          <Typography component={'p'} variant={'subtitle1'}>News Form</Typography>
        </DialogTitle>
        <DialogContent>
          <form className='NewsForm'
                onSubmit={handleSubmit}
          >
            <div className='row'>
              <div className={styles.spacing}>
                <Field
                  label='Title'
                  component={TextField}
                  name='title'
                />
              </div>
            </div>
            <div className='row'>
              <div className={styles.spacing}>
                <Field
                  label='Preview Text'
                  component={TextField}
                  name='preview'
                />
              </div>
            </div>
            <div className='row'>
              <div className={styles.spacing}>
                <Field
                  label='Full Text'
                  component={TextField}
                  name='description'
                />
              </div>
            </div>
            <div className='row'>
              <div className={styles.spacing}>
                <Field
                  component={SelectField}
                  fullWidth
                  id='author'
                  name='author'
                  label='Author'
                >
                  {this.props.authors.map(author => (
                    <MenuItem value={author._id} key={author._id}>{author.name}</MenuItem>
                  ))}
                </Field>
              </div>
            </div>
            {!this.props.isUpdate && <FieldArray
              component={renderFiles}
              name='files'
            />}
          </form>
        </DialogContent>
        <DialogActions>
          <Button label={'Submit'} arrow={false} raised={true} color={'secondary'} onClick={handleSubmit}/>
          <Button label={'Cancel'} onClick={this.props.closeAction} arrow={false}/>
        </DialogActions>
      </Dialog>
    );
  }
}

NewsForm = reduxForm({
  form: 'NewsForm',
  validate,
  fields: ['files']
})(NewsForm);

function mapStateToProps(state, ownProps) {
  let initialValues = {
    title: ownProps.selectedNews && ownProps.selectedNews.title || '',
    description: ownProps.selectedNews && ownProps.selectedNews.description || '',
    preview: ownProps.selectedNews && ownProps.selectedNews.preview || '',
    author: ownProps.selectedNews && ownProps.selectedNews.author._id || '',
    image: ownProps.selectedNews && ownProps.selectedNews.image || ''
  };
  return {initialValues};
}

NewsForm = connect(mapStateToProps, null, null, {withRef: true})(NewsForm);

export default NewsForm;
