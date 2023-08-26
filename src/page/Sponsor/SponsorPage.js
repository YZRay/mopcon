import Hero from "../../components/Layout/Hero";
import { ReactComponent as SmileIcon } from "../../components/asset/Icon/smile.svg";
import { Fragment } from "react";
import sponsorHeroContent from "../../data/HeroContent/sponsorHeroData.json";

const SponsorPage = () => {
  return (
    <Fragment>
      <Hero {...sponsorHeroContent} btnIcon={<SmileIcon />} />
    </Fragment>
  );
};

export default SponsorPage;
