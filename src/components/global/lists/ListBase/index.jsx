import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/fontawesome-free-solid'

// SCSS
import './ListBase.scss'

const ListBase = ({children=[], className, }) => {
    return (
        <ul className={`list ${className}`}>
            {children.map( (elem, index) => {
                return (
                <li key={index} className='list__item'>
                    <FontAwesomeIcon className='list__item__arrow' icon={faLongArrowAltRight}/>
                    <div className='list__item__content'>
                        {elem}
                    </div>
                </li>
                )
            })}
        </ul>
    )
}

export default ListBase;