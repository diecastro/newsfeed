
import React from 'react';
import MaterialButton from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Button = ({ label, primary, href, onClick, raised, disabled }) => (
  <MaterialButton
    variant={raised ? 'raised' : 'text'}
    disabled={disabled}
    onClick={onClick}
    href={href}
  >
    <div className='btn btn-lg btn-primary btn-inside-parent text-uppercase'>{label}</div>
    <div className='btn-inside'><KeyboardArrowRight /></div>
  </MaterialButton>
);

export default Button;
