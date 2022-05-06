import {createRef, useState} from "react";

import SectionBase from "../../../global/sections/SectionBase";
import ContainerBase from "../../../global/containers/ContainerBase";
import ButtonBase from "../../../global/buttons/ButtonBase";
import CardJoin from "../../../global/cards/CardJoin";


// SCSS
import './SectionJoin.scss'

const SectionJoin = ({offers=[]}) => {

    if (offers.length > 4) {
        throw Error('property "offers" is too long, expected value between 0 and 4.')
    }


    const [visibleCards, setVisibleCards] = useState(offers.slice(0, 2));
    const [activeButtonIndex, setActiveButton] = useState(0);

    const buttonMonthRef = createRef();
    const buttonYearRef = createRef();

    const cardRefs = [ createRef(), createRef() ];
    const refreshCards = (insidefunc) => {
        let cardMonth = cardRefs[0].current;
        let cardYear = cardRefs[1].current;

        cardMonth.classList.add('hidden');
        cardYear.classList.add('hidden');
        setTimeout(() => {
            insidefunc();
            cardMonth.classList.remove('hidden');
            cardYear.classList.remove('hidden');         
        }, 100);
    }
    const switchCards = (isMonthly) => {
        let buttonMonth = buttonMonthRef.current;
        let buttonYear = buttonYearRef.current;

        if(isMonthly) {
            setActiveButton(0)    
            refreshCards( () => setVisibleCards(offers.slice(0, 2)) )
        }
        else {
            setActiveButton(1)    
            refreshCards( () => setVisibleCards(offers.slice(2, 4)) )
        }
    }


    const SectionJoinTop = () => {
        if(offers.length <= 2) {
            return <></>;
        }
        else if(offers.length <= 4) {
            return <>

                <h1>Choose your plan</h1>
                <ContainerBase className="section-join__buttons-container">

                    {cardRefs.map( (ref, index) => {
                        const active = activeButtonIndex === index ? "active" : "";

                        const isMonthly = index === 0;
                        const text = isMonthly ? "Monthly" : "Yearly";
                        return (
                            <ButtonBase key={index}
                                className={active}
                                ref={buttonMonthRef}
                                text={text}
                                modifiers={['round', 'border-large']}
                                eventListener={() => switchCards(isMonthly)}
                            />
                        )
                    })}

                </ContainerBase>

            </>
        }
    }
    return (

        <SectionBase customId="section-join" className="section-join">

            <SectionJoinTop/>

            <ContainerBase className="section-join__cards-container">
                {visibleCards.map( (elem, index) => {
                    return (
                        <CardJoin ref={cardRefs[index]} key={index}
                            period={elem.period}
                            title={elem.title}
                            previousPrice={elem.previousPrice}
                            price={elem.price}
                            advantages={elem.advantages}
                            href={elem.href}
                        />
                    )
                })}

            </ContainerBase>

        </SectionBase>
    )
}

export default SectionJoin;