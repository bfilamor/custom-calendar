import React from 'react';

export const PanelButton = ({children, handleClick}) => {
  return (
   <>
    <button className='panel--button' onClick={handleClick}>{children}</button>
   </>
  )
}
