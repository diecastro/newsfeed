import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from '../../styles/NewsCard.scss';

class NewsDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.isVisible
    };
  }

  render() {
    const {data} = this.props;
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll='paper'
          aria-labelledby='scroll-dialog-title'
        >
          <DialogTitle id='scroll-dialog-title'>
            <b>{data.title}</b>
            <p className={styles.author}>{`Written by ${data.author.name}, follow him on Twitter @${data.author.twitter}`}</p>
          </DialogTitle>
          <DialogContent>
            <div className={styles.coverImage} style={{backgroundImage: `url(${data.image})`}}/>
            <DialogContentText>
              {data.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeDialog} color='primary'>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default NewsDialog;
