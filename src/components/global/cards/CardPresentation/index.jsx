import ButtonBase from '../../buttons/ButtonBase';
import CardBase from '../CardBase';


// SCSS
import './CardPresentation.scss'

const CardPresentation = ({title='', description='', href='', iconSrc='', ready=true, modifiers=[]}) => {

    let classes = '';

    modifiers.forEach(element => {
        classes += (` card-presentation--${element}`);
    });

    

    return (
        <CardBase className={`card-presentation${classes} shadow-dark`}>

            <div className='card-presentation__top'>
                <img className='icon' src={iconSrc}/>
                <h2 className='title'>{title}</h2>
            </div>

            <div className='card-presentation__description'>
                <h6 className='description'>{description}</h6>
            </div>


            { ready ? <ButtonBase
                className='read-more'
                text={'Read more'}
                href={href}
                modifiers={['hover-shadow', 'underline']}
                strong
            /> : null}

        </CardBase> 
    )
}


export default CardPresentation;