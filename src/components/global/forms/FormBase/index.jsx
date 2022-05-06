

// SCSS
import './FormBase.scss'

const FormBase = ({children, className, method='get', action=''}) => {
    return (

        <form action={action} method={method} className={`form ${className}`}>
            {children}
        </form>
    )
}

export default FormBase;