import { forwardRef } from 'react'


// SCSS
import './ContainerBase.scss'

  
const ContainerBase = forwardRef(({children, className='', horizontal=false}, ref) => {
    className += horizontal ? ' container--horizontal' : '';
    return (
        <div ref={ref} className={`container ${className}`}>
            {children}
        </div>
    )
});



export default ContainerBase