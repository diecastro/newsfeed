import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import styles from '../../../../styles/FileInput.scss';

function FileInput(props) {
  const {className, input: {onChange}, dropzoneOptions, meta: {error, touched}, label, classNameLabel, children, name, onDropFunction, onDropRejected, onDropAccepted} = props;
  return (
    <div>
      <div className={`${className}` + (error && touched ? ' errorText ' : '')}>
        {label && <p className={classNameLabel || ''}>{label}</p>}
        <Dropzone
          {...dropzoneOptions}
          name={name}
          onDrop={(acceptedFiles, rejectedFiles, e) => {
            onDropFunction(acceptedFiles, rejectedFiles, e);
            return onChange(acceptedFiles);
          }}
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
        >
          {children}
        </Dropzone>

      </div>
      {error && touched && <p className={styles.fileUploadError}> {error}</p>}
    </div>
  );
}

FileInput.propTypes = {
  dropzoneOptions: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  classNameLabel: PropTypes.string,
  input: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  onDropFunction: PropTypes.func,
};

FileInput.defaultProps = {
  className: '',
  onDropFunction: () => {
  },
};

export default FileInput;
