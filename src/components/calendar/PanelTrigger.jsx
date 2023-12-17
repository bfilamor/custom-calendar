import React from 'react'

export const PanelTrigger = ({ children, handleClick }) => {
    return (
        <div className='rounded-3 py-2 px-4 panel--trigger fw-bold fs-5' onClick={handleClick ? handleClick : null}>
            {children}
        </div>
    )
}
