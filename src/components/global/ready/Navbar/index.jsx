import {useState, useEffect} from 'react';

import ButtonBase from '../../buttons/ButtonBase';
import NavbarLogo from './NavbarLogo';
import ButtonMenu from '../../buttons/ButtonMenu';

// SCSS
import './Navbar.scss'

const buttonsDataAll = [
    {
        id: "Season 1",
        text: 'NatlukDAO: Season 1',
        href: '',
        full: false,
        arrow: false,
    },
    {
        id: "presentation",
        text: 'Choose Your community',
        href: '#section-presentation',
        full: false,
        arrow: true,
    },
    {
        id: "newsletter",
        text: 'Newsletter',
        href: '#section-newsletter',
        full: false,
        arrow: false,
    },
    {
        id: "consulting",
        text: 'Consulting',
        href: '',
        full: false,
        arrow: false,
    },
    {
        id: "join",
        text: 'Join us',
        href: '#section-join',
        full: false,
        arrow: true,
    },
    {
        id: "community",
        text: 'Community',
        href: '',
        full: true,
        arrow: false,
    },
    {
        id: "subscription",
        text: 'Your Subscription',
        href: '',
        full: true,
        arrow: false,
    },
]


const Navbar = ({buttonIds=[]}) => {

    const [opened, openNavbar] = useState(false);
    const [activationClass, setActivationClass] = useState('');
    
    let buttonsData = [];
    buttonIds.forEach(id => {
        let button = buttonsDataAll.find(elem => elem.id === id);
        buttonsData.push(button);
    })

    useEffect(() => {
        if(opened)
            setActivationClass('active')
        else
            setActivationClass('');
    }, [opened]);

    const NavbarButton = ({button}) => {
        if(button.full) {
            return <ButtonBase
                text={button.text}
                href={button.href}
                modifiers={['square', 'light', 'text-dark']}
                strong
                arrow={button.arrow}
            />
        }
        else { 
            return <ButtonBase
                text={button.text}
                href={button.href}
                modifiers={['hover-shadow']}
                arrow={button.arrow}
            />
        }
    }
    return (
        <>
            <div className='navbar-placeholder'/>
            <div className={`navbar ${activationClass}`}>
                <main className='navbar__main'>

                    <NavbarLogo className='navbar__logo'/>

                    <nav className='navbar__menu'>
                        {buttonsData.map( (button) => {
                            return <NavbarButton button={button} key={button.id}/>
                        })}
                    </nav>

                    <ButtonMenu onClick={() => {openNavbar(opened !== true)} }/>

                </main>
            </div>
        </>
    )
}

export default Navbar;