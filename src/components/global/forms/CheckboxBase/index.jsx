

// SCSS
import './CheckboxBase.scss'

const CheckboxBase = ({name='', label=''}) => {
    return (
        <div className='checkbox-container'>
            <input name={name} type={'checkbox'} className='checkbox-container__input'></input>
            <h6 className='checkbox-container__name'>{label}</h6>
        </div>
    )
}

export default CheckboxBase;