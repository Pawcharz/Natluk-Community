// SCSS
import './NavbarLogo.scss'

const NavbarLogo = ({className=''}) => {
    return (
        <a href='/' className={`navbar-logo ${className} shadow-light`}>
            <img src="/images/NATLUK-text.png" alt="Natluk!" />
        </a>
    )
}

export default NavbarLogo;