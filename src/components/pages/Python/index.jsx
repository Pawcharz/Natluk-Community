import { lazy } from "react";
import SectionJoin from "../../global/sections/SectionJoin";
import LazyLoader from "../../global/wrappers/LazyLoader";

import { benefitsPython } from "../../../data/benefits";
import { offersPython } from '../../../data/offers';

const Navbar = lazy( () => import("../../global/ready/Navbar") )
const Footer = lazy( () => import("../../global/ready/Footer") )

const HeaderPython = lazy( () => import("./HeaderPython") );
const SectionBenefits = lazy( () => import("../../global/sections/SectionBenefits") );
const SectionNewsletter = lazy( () => import("../../global/sections/SectionNewsletter") );


const buttonIds = ['Season 1', "join", "newsletter", "community", "subscription"];
const newsletterCheckboxes = ["python"];


const Page = () => {
    return (
        <>
            <LazyLoader>
                <Navbar buttonIds={buttonIds}/>

                <HeaderPython/>
                <SectionBenefits benefits={benefitsPython}/>
                <SectionJoin offers={offersPython}/>
                <SectionNewsletter checkboxNames={newsletterCheckboxes}/>

                <Footer/>
            </LazyLoader>
        </>
    )
}

export default Page;