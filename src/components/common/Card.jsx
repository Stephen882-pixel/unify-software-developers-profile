import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  style = {},  // Add this to accept inline styles
  ...props 
}) => {
  return (
    <div 
      className={`card ${hover ? 'card-hover' : ''} ${className}`}
      style={style}  // Pass through the style prop
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
