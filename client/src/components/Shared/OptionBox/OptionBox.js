import React from 'react';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router';
import Button from '../Button/Button';

const OptionBox = ({ optionLabel, label, href }) =>
  <div>
    <Paper elevation={2}>
      <h2>{optionLabel}</h2>
      <Link to={href}>
        <Button primary label={label} />
      </Link>
    </Paper>
  </div>;

export default OptionBox;
