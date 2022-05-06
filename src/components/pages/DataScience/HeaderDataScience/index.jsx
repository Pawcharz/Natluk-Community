import HeaderBase from '../../../global/headers/HeaderBase';
import ButtonBase from '../../../global/buttons/ButtonBase';
import ContainerBase from '../../../global/containers/ContainerBase';


// SCSS
import './HeaderDataScience.scss'

const HeaderDataScience = ({}) => {
    return (
        <HeaderBase className='header-ds'>

            <ContainerBase className='header-ds__left'>
                <h1>Datascience Community</h1>
                <h6><strong>No more struggling with verifying information and finding best practices on stack overflow.</strong> Natluk is the place for you to meet seniors from the most rapidly developing branches and gather the most valuable informations as fast as possible!</h6>
                
                <ButtonBase href="#section-join"
                    className='shadow-light'
                    text={'Chose this Community!'}
                    modifiers={['light', 'text-dark']}
                />

            </ContainerBase>


            <img className='header-ds__right' src="/images/data-science-lg.png"/>
        </HeaderBase>
    )
}

export default HeaderDataScience;