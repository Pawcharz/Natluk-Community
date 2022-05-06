import { forwardRef } from 'react';


// SCSS
import './ButtonIcon.scss'

const ButtonIcon = forwardRef( ({ id='', className='', imageSrc='', imageName='icon', onClick}, ref) => {
    return (

        <button ref={ref} onClick={onClick} id={id} className={`button-icon ${className}`}>
            <img src={imageSrc} alt={imageName} />
        </button>
    )
})

export default ButtonIcon;