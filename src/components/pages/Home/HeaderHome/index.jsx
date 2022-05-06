
import HeaderBase from '../../../global/headers/HeaderBase';
import ButtonBase from '../../../global/buttons/ButtonBase';
import ContainerBase from '../../../global/containers/ContainerBase';


// SCSS
import './HeaderHome.scss'

const HeaderHome = ({}) => {
    return (
        <HeaderBase className='header-home'>
            <ContainerBase className='header-home__left'>
                <h1>Community of Datascience & Blockchain industry</h1>
                <h6><strong>No more struggling with verifying information and finding best practices on stack overflow.</strong> Natluk is the place for you to meet seniors from the most rapidly developing branches and gather the most valuable informations as fast as possible!</h6>
                <ButtonBase href="#section-presentation"
                className='shadow-light'
                text={'Look up our communities!'}
                modifiers={['light', 'text-dark']}/>

            </ContainerBase>


            <img className='header-home__right' src="/images/header-home.png"/>
        </HeaderBase>
    )
}

export default HeaderHome;