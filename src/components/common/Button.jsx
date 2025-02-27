import React from 'react'

function Button({onClick,className,disabled,children}) {
  return (
    <button className={`btn ${className} `}
    onClick={onClick}
    disabled={disabled}>
{children}
    </button>
  );
};

export default Button
