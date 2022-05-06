import CardBenefits from "../../cards/CardBenefits";
import SectionBase from "../SectionBase";


// SCSS
import './SectionBenefits.scss'

const SectionBenefits = ({className, benefits=[]}) => {

    return (

        <SectionBase customId="section-benefits" className={`section-benefits ${className}`}>
            <h1 className="title">What does community give you?</h1>
            
            <div className="section-benefits__cards">
                {benefits.map( (item, index) => {
                    return (
                        <CardBenefits
                            iconClass={item.iconClass}
                            title={item.title}
                            description={item.description}
                            size={item.size}

                            key={index}
                        />
                    )
                })}
            </div>

        </SectionBase>
    )
}
    


export default SectionBenefits;