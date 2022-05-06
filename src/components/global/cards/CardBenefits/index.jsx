import CardBase from '../CardBase';
import ContainerBase from '../../containers/ContainerBase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// SCSS
import './CardBenefits.scss'
const CardBenefits = ({className='', title='', description='', iconClass='', size='md'}) => {

    return (
        <CardBase className={`card-benefits ${className} card-benefits--${size}`}>

            <ContainerBase>
                <h4 className="card-benefits__title strong">
                    <FontAwesomeIcon className='' icon={`icon ${iconClass}`}/>
                    {title}
                </h4>
                <h6 className='card-benefits__description'>{description}</h6>
            </ContainerBase>
            
        </CardBase> 
    )
}

export default CardBenefits;