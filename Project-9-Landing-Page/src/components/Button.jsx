import React from 'react'

const Button = ({title, className}) => {
  return (
    <div
      className={`w-fit px-4 py-3 max-sm:py-2 max-sm:px-3 border-2 text-xl font-bold  rounded-md ${className}`}
    >
      {title}
    </div>
  );
}

export default Button