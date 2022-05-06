import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown } from '@fortawesome/fontawesome-free-solid'

// SCSS
import './ButtonBase.scss'

const ButtonBase = forwardRef( ({text='', className='', modifiers=[], href, eventListener, strong=false, arrow}, ref) => {
    let classes = className;
    modifiers.forEach(element => {
        classes += (` button--${element}`);
    });
    let textClass = '';
    textClass += (strong ? ' strong' : '')

    const Arrow = () => {
        if(arrow)
            return <FontAwesomeIcon className='button__arrow' icon={faLongArrowAltDown}/>
        else
            return <></>
    }


    if(!href) {
        return (
            <button ref={ref} className={`button ${classes}`} onClick={eventListener}>
                <h6 className={`button__text${textClass}`}>{text}</h6>
                <Arrow/>
            </button>
        )
    }
    if(href.startsWith('/')) {
        return (
            <Link to={href} className={`button ${classes}`} href={href}>
                <h6 className={`button__text${textClass}`}>{text}</h6>
                <Arrow/>
            </Link>
        )
    }
    return (
        <a ref={ref} className={`button ${classes}`} href={href}>
            <h6 className={`button__text${textClass}`}>{text}</h6>
            <Arrow/>
        </a>
    )
})

export default ButtonBase;