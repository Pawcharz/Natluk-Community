import SectionBase from "../../../global/sections/SectionBase";

import ContainerBase from "../../../global/containers/ContainerBase";
import ListBase from "../../../global/lists/ListBase";

import FormBase from "../../../global/forms/FormBase";
import InputBase from "../../../global/forms/InputBase";
import CheckboxBase from "../../../global/forms/CheckboxBase";
import ButtonBase from "../../../global/buttons/ButtonBase";


// SCSS
import './SectionNewsletter.scss'

const checkboxesAll = [
    {name: "data-science", label: "Data Science"},
    {name: "blockchain-web3", label: "Blockchain + Web3"},
    {name: "python", label: "Python"},
    {name: "web-dev", label: "Web development"},
]

const SectionNewsletter = ({checkboxNames=[]}) => {

    let checkboxesChosen = [];
    checkboxNames.forEach(name => {
        let checkbox = checkboxesAll.find( checkbox => checkbox.name === name);
        checkboxesChosen.push(checkbox);
    })
    
    return (
        <SectionBase customId="section-newsletter" className="section-newsletter">

            <ContainerBase className="section-newsletter__text-container">
                <h1 className="section-newsletter__title">Newsletter</h1>
                <h5>Do you want to be up to date? We provide free newsletter in which you will find:</h5>

                <ListBase>
                    <h6>Substantive article written by experts</h6>
                    <h6>Fresh industry news</h6>
                    <h6>Links to verified resources</h6>
                </ListBase>

            </ContainerBase>

            <FormBase className="section-newsletter__form">
                <InputBase name="name" placeholder="Your name"/>
                <InputBase name="email" placeholder="Your e-mail adress"/>

                {checkboxesChosen.map( checkbox => <CheckboxBase name={checkbox.name} label={checkbox.label} key={checkbox.name}/>)}

                <ButtonBase
                    text={'SIGN UP'}
                    modifiers={['suare', 'light', 'text-dark']}
                    className='button-submit'
                />
            </FormBase>
            
        </SectionBase>
    )
}

export default SectionNewsletter;