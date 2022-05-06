import { lazy } from "react";
import SectionJoin from "../../global/sections/SectionJoin";
import LazyLoader from "../../global/wrappers/LazyLoader";

import { benefitsDataScience } from "../../../data/benefits";
import { offersDataScience } from '../../../data/offers';

const Navbar = lazy( () => import("../../global/ready/Navbar") )
const Footer = lazy( () => import("../../global/ready/Footer") )

const HeaderDataScience = lazy( () => import("./HeaderDataScience") );
const SectionBenefits = lazy( () => import("../../global/sections/SectionBenefits") );
const SectionNewsletter = lazy( () => import("../../global/sections/SectionNewsletter") );

const buttonIds = ['Season 1', "join", "newsletter", "community", "subscription"];
const newsletterCheckboxes = ["data-science"];


const Page = () => {
    return (
        <>
            <LazyLoader>
                <Navbar buttonIds={buttonIds}/>

                <HeaderDataScience/>
                <SectionBenefits benefits={benefitsDataScience}/>
                <SectionJoin offers={offersDataScience}/>
                <SectionNewsletter checkboxNames={newsletterCheckboxes}/>

                <Footer/>
            </LazyLoader>
        </>
    )
}

export default Page;