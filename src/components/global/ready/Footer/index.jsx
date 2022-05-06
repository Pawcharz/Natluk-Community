import SectionBase from '../../sections/SectionBase';
import ContainerBase from '../../containers/ContainerBase';
import ButtonBase from '../../buttons/ButtonBase';

// SCSS
import './Footer.scss'

const Footer = ({}) => {
    return (
        <SectionBase className="footer">
            <h6>@ Natluk.com 2022</h6>

            <ContainerBase className="footer__buttons">
                <ButtonBase
                    modifiers={['hover-shadow']}
                    text="Privacy Policy"
                />
                <ButtonBase
                    modifiers={['hover-shadow']}
                    text="Rules"
                />
            </ContainerBase>

        </SectionBase>
    )
}

export default Footer;