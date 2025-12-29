import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  to, 
  href,
  onClick,
  type = 'button',
  className = '',
  ...props 
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`.trim();


  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick} {...props}>
      <span>{children}</span>
    </button>
  );
};

export default Button;