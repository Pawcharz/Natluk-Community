import HeaderBase from '../../../global/headers/HeaderBase';
import ButtonBase from '../../../global/buttons/ButtonBase';
import ContainerBase from '../../../global/containers/ContainerBase';


// SCSS
import './HeaderPython.scss'

const HeaderPython = ({}) => {
    return (
        <HeaderBase className='header-py'>

            <ContainerBase className='header-py__left'>
                <h1>Python Community</h1>
                <h6><strong>No more struggling with verifying information and finding best practices on stack overflow.</strong> Natluk is the place for you to meet seniors from the most rapidly developing branches and gather the most valuable informations as fast as possible!</h6>
                
                <ButtonBase href="#section-join"
                    className='shadow-light'
                    text={'Chose this Community!'}
                    modifiers={['light', 'text-dark']}
                />

            </ContainerBase>


            <img className='header-py__right' src="/images/python-lg.png"/>
        </HeaderBase>
    )
}

export default HeaderPython;