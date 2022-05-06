import {forwardRef} from 'react';

import ButtonBase from '../../buttons/ButtonBase';
import ListBase from '../../lists/ListBase';
import CardBase from '../CardBase';

// SCSS
import './CardJoin.scss'
const CardJoin = forwardRef( ({title, previousPrice, price, period, advantages}, ref) => {

    let PreviousPrice = () => {
        if(previousPrice !== null && previousPrice !== false)
            return <h6 className='prev-price'>{`${previousPrice} EUR`}</h6>

        return <></>
    }

    return (
        <CardBase ref={ref} className={`card-join shadow-light`}>

            <div className='card-join__top'>
                <h2 className='title'>{title}</h2>
            </div>

            <div className='card-join__price-container'>
                <PreviousPrice/>
                <h1 className='price'>{`${price} EUR`}</h1>
                <h6>{`/ ${period}`}</h6>
            </div>

            <ListBase className='card-join__list'>
                {advantages.map( (elem, index) => <h6 key={index}>{elem}</h6>)}
            </ListBase>

            <ButtonBase className='card-join__button'
                text={'Join'}
                href={''}
                modifiers={['square', 'light', 'text-dark']}
                strong
            />
        </CardBase> 
    )
})

export default CardJoin;