import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faMousePointer } from '@fortawesome/fontawesome-free-solid'

import './CardFaq.scss'

const CardFaq = ({question, isActive=false, onClick}) => {
    let activeClass = "";
    isActive ? activeClass = " active" : activeClass = "";

    return (
        <div 
            onClick={() => onClick()} 
            className={`card-faq${activeClass}`}
        >
            <FontAwesomeIcon className='card-faq__arrow' icon={faLongArrowAltRight}/>
            <h5 className="card-faq__question">{question}</h5>
            <FontAwesomeIcon className='card-faq__pointer' icon={faMousePointer}/>

        </div>
    )
}
export default CardFaq;