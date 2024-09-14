import React from 'react'

function Button({title, extraStyle, type, onClick}) {
  return (
    <button onClick={onClick} type={type} className={`${extraStyle} p-2 rounded-md font-semibold text-[19px] hover:opacity-65 duration-300`}>
    {title}  
    </button>
  )
}

export default Button
