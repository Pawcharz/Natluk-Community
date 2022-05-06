import { useRef } from "react";

import SectionBase from "../../../global/sections/SectionBase";
import ContainerBase from "../../../global/containers/ContainerBase";
import SliderBase from "../../../global/containers/SliderBase/SliderBase";
import CardPresentation from "../../../global/cards/CardPresentation";
import ButtonIcon from "../../../global/buttons/ButtonIcon/ButtonIcon";


import { communities } from "../../../../data/communities";

// SCSS
import './SectionPresentation.scss'

const SectionPresentation = () => {

    let sliderRef = useRef(null)

    const ScrollToElem = (cardCode = '') => {
        let slider = sliderRef.current;
        let card = slider.querySelector(`.card-presentation--${cardCode}`);

        let cardWidthString = getComputedStyle(card).width;
        let cardWidth = Number(cardWidthString.substring(0, cardWidthString.length-2) );

        let sliderPaddingString = getComputedStyle(slider).paddingLeft;
        let sliderPadding = Number(sliderPaddingString.substring(0, sliderPaddingString.length-2) );

        let newCardPosition = card.offsetLeft + cardWidth / 2 - sliderPadding;


        let sliderHeightString = getComputedStyle(slider).height;
        let sliderHeight = Number(sliderHeightString.substring(0, sliderHeightString.length-2) );

        let newSliderPosition = slider.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2 + sliderHeight / 2;

        
        window.scrollTo(0, newSliderPosition);
        slider.scrollTo(newCardPosition, 0);
    }

    return (

        <SectionBase customId="section-presentation" className="section-presentation">

            <h1 className="title">Choose your community and see what we have to offer</h1>

            <SliderBase ref={sliderRef} className='section-presentation__slider'>
                {communities.map( (card, id) => <CardPresentation key={id}
                    title={card.name}
                    description={card.description}
                    href={card.href}
                    iconSrc={card.imageSrc}
                    ready={card.ready}
                    modifiers={[card.code]}
                />)}
            </SliderBase>


            <ContainerBase className='section-presentation__icons' horizontal>
                {communities.map( (card, id) => <ButtonIcon key={id}
                    id={card.code}
                    imageName={card.name}
                    imageSrc={card.imageSrc}
                    onClick={() => ScrollToElem(card.code)}
                />)}
            </ContainerBase>
            
        </SectionBase>
    )
}

export default SectionPresentation;