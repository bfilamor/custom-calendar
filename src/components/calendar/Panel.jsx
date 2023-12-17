import React from 'react'

export const Panel = ({ children, zIndex }) => {
    return (
        <div className={`d-flex flex-column justify-content-between align-items-between position-absolute h-100 top-0 start-0 end-0 bg-white p-3 z-${zIndex}`}>
            {children}
        </div>
    )
}
