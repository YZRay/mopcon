import Hero from "../components/Layout/Hero";
import { Fragment } from "react";
import sponsorHeroContent from "../data/HeroContent/sponsorHeroData";

const Sponsor = () => {
  return (
    <Fragment>
      <Hero {...sponsorHeroContent} />
    </Fragment>
  );
};

export default Sponsor;
