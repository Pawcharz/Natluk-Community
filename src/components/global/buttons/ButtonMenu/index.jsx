import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
// SCSS
import './ButtonMenu.scss'

const ButtonMenu = React.forwardRef( ( { className='', onClick = () => {} }, ref) => {
        return (
            <button onClick={onClick} ref={ref} className={`button-menu ${className}`}>
                <FontAwesomeIcon className='button-menu__icon' icon={faBars}/>
            </button>
        )
    }
)

export default ButtonMenu;