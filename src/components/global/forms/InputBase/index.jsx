

// SCSS
import './InputBase.scss'

const InputBase = ({name='', type='text', placeholder='', className=''}) => {
    return (
        <input name={name} placeholder={placeholder} type={type} className={`input ${className}`}></input>
    )
}

export default InputBase;