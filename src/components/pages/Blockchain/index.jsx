import { lazy } from "react";
import LazyLoader from "../../global/wrappers/LazyLoader";

import { benefitsBlockchain } from "../../../data/benefits";
import { offersBlockchain } from '../../../data/offers';

const Navbar = lazy( () => import("../../global/ready/Navbar") )
const Footer = lazy( () => import("../../global/ready/Footer") )

const HeaderBlockchain = lazy( () => import("./HeaderBlockchain") );
const SectionBenefits = lazy( () => import("../../global/sections/SectionBenefits") );
const SectionJoin = lazy( () => import("../../global/sections/SectionJoin") );
const Sectionnewsletter = lazy( () => import("../../global/sections/SectionNewsletter") );


const buttonIds = ['Season 1', "join", "newsletter", "community", "subscription"];
const newsletterCheckboxes = ["blockchain-web3"];


const Page = () => {
    return (
        <>
            <LazyLoader>
                <Navbar buttonIds={buttonIds}/>

                <HeaderBlockchain/>
                <SectionBenefits benefits={benefitsBlockchain}/>
                <SectionJoin offers={offersBlockchain}/>
                <Sectionnewsletter checkboxNames={newsletterCheckboxes}/>

                <Footer/>
            </LazyLoader>
        </>
    )
}

export default Page;