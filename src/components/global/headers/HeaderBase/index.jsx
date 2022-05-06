import SectionBase from '../../sections/SectionBase';


// SCSS
import './HeaderBase.scss'

const HeaderBase = ({children, className}) => {
    return (
        <SectionBase className={`header ${className}`} modifiers={['double']}>
            {children}
        </SectionBase>
    )
}

export default HeaderBase;