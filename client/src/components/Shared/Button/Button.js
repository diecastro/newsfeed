import React from 'react';
import MaterialButton from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Button = ({label, primary, href, onClick, raised, disabled, color, arrow = true}) => (
  <MaterialButton
    variant={raised ? 'contained' : 'text'}
    disabled={disabled}
    onClick={onClick}
    href={href}
    color={color}
  >
    {label}
    {arrow && <div style={{display: 'flex'}}><KeyboardArrowRight/></div>}
  </MaterialButton>
);

export default Button;
