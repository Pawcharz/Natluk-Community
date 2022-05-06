
import { forwardRef } from 'react';
import ContainerBase from '../../../../global/containers/ContainerBase';

// SCSS
import './FaqDisplayer.scss'

const FaqDisplayer = forwardRef( ({className, answer=[]}, ref) => {
    return (
        <ContainerBase ref={ref} className={`faq-displayer ${className}`}>

            <ContainerBase ref={ref} className={`faq-displayer__main`}>
                {answer.map( (row, index) => {
                    return <h6 key={index}>{row}</h6>
                })}
            </ContainerBase>

        </ContainerBase>
    )
})

export default FaqDisplayer;