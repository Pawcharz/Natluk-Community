
import HeaderBase from '../../../global/headers/HeaderBase';
import ButtonBase from '../../../global/buttons/ButtonBase';
import ContainerBase from '../../../global/containers/ContainerBase';


// SCSS
import './HeaderBlockchain.scss'

const HeaderBlockchain = ({}) => {
    return (
        <HeaderBase className='header-blockchain'>

            <ContainerBase className='header-blockchain__left'>
                <h1>Blockchain & Web3.0 Community</h1>
                <h6><strong>No more struggling with verifying information and finding best practices on stack overflow.</strong> Natluk is the place for you to meet seniors from the most rapidly developing branches and gather the most valuable informations as fast as possible!</h6>
                
                <ButtonBase href="#section-join"
                    className='shadow-light'
                    text={'Chose this Community!'}
                    modifiers={['light', 'text-dark']}
                />

            </ContainerBase>


            <img className='header-blockchain__right' src="/images/blockchain-lg.png"/>
        </HeaderBase>
    )
}

export default HeaderBlockchain;