import React, { Children } from "react";
import { Link } from "react-router-dom";
import './Button.css';

const Button = ({
    Children,
    variant = 'primary',
    size = 'medium',
    to,
    href,
    onClick,
    type = 'button',
    className = '',
    ...props
}) => {
    const buttonClass = `btn btn-${variant} btn-${size} ${className}`;

    if(to){
        return(
            <Link to={to} className={buttonClass} {...props}>
                {Children}
            </Link>
        );
    }

    if(href){
        return(
            <a href={href} className={buttonClass} {...props}>
                {Children}
            </a>
        );
    }

    return(
        <button type={type} className={buttonClass} onClick={onClick} {...props}>
            {Children}
        </button>
    );
};


export default Button;
