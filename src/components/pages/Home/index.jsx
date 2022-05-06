import { lazy } from "react";
import LazyLoader from "../../global/wrappers/LazyLoader";
import {offersGeneral} from '../../../data/offers';

const Navbar = lazy( () => import("../../global/ready/Navbar") )
const Footer = lazy( () => import("../../global/ready/Footer") )

const HeaderHome = lazy( () => import("./HeaderHome") );
const SectionPresentation = lazy( () => import("./SectionPresentation") );
const SectionNewsletter = lazy( () => import("../../global/sections/SectionNewsletter") );
const SectionJoin = lazy( () => import("../../global/sections/SectionJoin") );
const SectionInside = lazy( () => import("./SectionInside") )
const SectionFaq = lazy( () => import("./SectionFaq") )


const navbarButtonIds = ['Season 1', "presentation", "newsletter", "community", "subscription"];
const newsletterCheckboxes = ["data-science", "blockchain-web3", "python", "web-dev"];

const offers = offersGeneral;

const Page = () => {
    return (
        <>
        
            <LazyLoader>
                <Navbar buttonIds={navbarButtonIds}/>

                <HeaderHome/>
                <SectionPresentation/>
                <SectionNewsletter checkboxNames={newsletterCheckboxes}/>
                <SectionJoin offers={offers}/>
                <SectionInside/>
                <SectionFaq/>

                <Footer/>
            </LazyLoader>
        </>
    )
}

export default Page;