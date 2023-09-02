import Hero from "../../components/Layout/Hero";
import { ReactComponent as SmileIcon } from "../../components/asset/Icon/smile.svg";
import { Fragment } from "react";
import sponsorHeroContent from "../../data/HeroContent/sponsorHeroData.json";
import RewardSection from "./RewardSection";
import JoinSection from "./JoinSection";

const SponsorPage = () => {
  return (
    <Fragment>
      <Hero {...sponsorHeroContent} btnIcon={<SmileIcon />} />
      <RewardSection />
      <JoinSection />
    </Fragment>
  );
};

export default SponsorPage;
