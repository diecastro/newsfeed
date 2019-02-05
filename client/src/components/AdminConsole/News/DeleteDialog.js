import React from 'react';
import { Dialog, DialogActions, DialogContent, Typography } from '@material-ui/core';
import Button from '../../Shared/Button/Button';

const DeleteDialog = ({deleteAction, closeAction, isVisible}) => {
  return (
    <Dialog open={isVisible} fullWidth maxWidth={'md'}>
      <DialogContent>
        <Typography component={'p'}>Are you sure you want to delete this?</Typography>
      </DialogContent>
      <DialogActions className={'flex'}>
        <Button onClick={deleteAction} label={'Delete'}/>
        <Button onClick={closeAction} label={'Cancel'}/>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
