
import SectionBase from '../../../global/sections/SectionBase';
import ContainerBase from '../../../global/containers/ContainerBase';
import ListBase from '../../../global/lists/ListBase';


// SCSS
import './SectionInside.scss'

const SectionInside = ({ }) => {
    return (
        <SectionBase customId='section-inside' className='section-inside'>
            <ContainerBase className='section-inside__text'>
                <h1 className='section-inside__title'>How does it look inside?</h1>
                <h6>So how our platform looks inside? Imagine the place where best experts in their fields continuously help others develop their skills and achieve goals. They organise a lot of webinars(usually around 5-7 a week), live coding events and are always ready to advice you.</h6>

                <ListBase>
                    <h6>You gain access to channels grouped by topics.</h6>
                    <h6>In these channels, you can find various rosources, answers to already asked questions.</h6>
                    <h6>You can ask anybody for help with your problem.</h6>
                    <h6>If you want, you can participate in webinars and code live with others - both mentors and ordinary members.</h6>
                </ListBase>

            </ContainerBase>


            <img className='section-inside__image' src="/images/section-inside.png" />
        </SectionBase>
    )
}

export default SectionInside;