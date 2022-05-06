
import { forwardRef, useRef } from 'react';
import ButtonSlider from '../../buttons/ButtonSlider/ButtonSlider';


// SCSS
import './SliderBase.scss'

  
const SliderBase = forwardRef( ({children, className=''}, ref ) => {
    // ref = !ref ? useRef() : null;

    const slideLeft = () => {
        ref.current.scrollBy(-400, 0)
    }
    const slideRight = () => {
        ref.current.scrollBy(400, 0)
    }
    return (
        <div className={`slider ${className}`}>

            <ButtonSlider left={true} onClick={slideLeft}/>

            <div className={`slider__inner`}>

                <div ref={ref} className={`slider__scroll`}>
                    {children}
                </div>
                
            </div>

            <ButtonSlider left={false} onClick={slideRight}/>
        </div>
    )
})



export default SliderBase;