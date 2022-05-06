import React from 'react';

// SCSS
import './CardBase.scss'

const CardBase = React.forwardRef( ({className='', children}, ref) => {
    return (
        <div ref={ref} className={`card ${className}`}>
            {children}
        </div>
    )
})

export default CardBase;