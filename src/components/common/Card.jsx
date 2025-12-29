import React, { Children } from "react";
import './Card.css';

const Card = ({
    Children,
    className = '',
    hover = true,
    ...props
}) => {
    return(
        <div className={`card ${hover ? 'card-hover' : ''} ${className}`} {...props}>
            {Children}
        </div>
    );
};

export default Card;
