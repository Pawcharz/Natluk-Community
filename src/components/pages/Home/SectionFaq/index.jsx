import { useRef, useState } from "react";

import SectionBase from "../../../global/sections/SectionBase";
import ContainerBase from "../../../global/containers/ContainerBase";
import CardBase from "../../../global/cards/CardBase";
import ButtonBase from "../../../global/buttons/ButtonBase";

import CardFaq from "../../../global/cards/CardFaq";
import FaqDisplayer from "./FaqDisplayer";


import { faqData } from "../../../../data/faq";


// SCSS
import './SectionFaq.scss'

const SectionFaq = () => {

    const [answer, setAnswer] = useState([""]);
    const [cardIndex, setCardIndex] = useState(null);
    const cardsRef = useRef();
    const displayerRef = useRef();

    const refreshDisplayer = (insidefunc) => {
        let displayer = displayerRef.current;

        displayer.classList.add('hidden');
        displayer.classList.add('hidden');
        setTimeout(() => {
            insidefunc();
            displayer.classList.remove('hidden');
            displayer.classList.remove('hidden');         
        }, 100);
    }
    const changeCard = (index) => {
        let displayer = displayerRef.current;

        if(index === cardIndex) {
            refreshDisplayer( () => {
                setAnswer([""])
                setCardIndex(null);
            })
        }
        else {
            refreshDisplayer( () => { 
                setAnswer(faqData[index].answer)
                setCardIndex(index);
            })
        }
        displayer.scrollIntoView({block: "center"});
    }

    return (

        <SectionBase customId="section-faq" className="section-faq">

            <CardBase className="section-faq__left">
                
                <ContainerBase className="section-faq__left__text-container">
                    <h1>Something else?</h1>
                    <h6>
                        You're not sure if Natluk is for you? <br/>
                        <strong>You want to ask about something?</strong> <br/>
                        Write to us and we will answer your questions.
                    </h6>
                </ContainerBase>

                <ButtonBase
                    href={"#"}
                    className="section-faq__left__button"
                    text="Write to us on discord"
                    modifiers={['hover-shadow', 'underline']}
                    strong
                />
            </CardBase>

            <ContainerBase ref={cardsRef} className="section-faq__cards">
                {faqData.map( (card, index) => {
                    
                    return (
                        <CardFaq
                            isActive={index == cardIndex}                            
                            question={card.question}
                            onClick={() => changeCard(index)}
                            key={index}
                        />
                    )
                })}
            </ContainerBase>

            <FaqDisplayer ref={displayerRef} className="section-faq__displayer"
                answer={answer}
            />

        </SectionBase>
    )
}

export default SectionFaq;