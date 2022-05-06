import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/fontawesome-free-solid'

// SCSS
import './ButtonSlider.scss'

const ButtonSlider = React.forwardRef( ({left=true, className='', onClick}, ref) => {
    let classes = !left ? 'button-slider--right ': 'button-slider--left ';
    classes += className;

    return (
        <div className={`button-slider ${classes}`}>
            <button ref={ref} onClick={onClick} className='button-slider__button'>
                <FontAwesomeIcon className='button-slider__icon' icon={faChevronLeft}/>
            </button>
        </div>
    )

})

export default ButtonSlider;