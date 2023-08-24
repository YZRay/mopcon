import { Fragment } from "react";
import { ReactComponent as ExternalIcon } from "../components/asset/Icon/system-uicons_external.svg";
import Hero from "../components/Layout/Hero";
import Introduce from "../components/Layout/introduce";
import Core from "../components/Layout/Core";
import TrafficInformation from "../components/Layout/TrafficInformation";
import SponsorArea from "../components/Layout/SponsorArea";
import homeHeroContent from "../data/HeroContent/homeHeroData";

const Home = () => {
  return (
    <Fragment>
      <Hero {...homeHeroContent} btnIcon={<ExternalIcon />} />
      <Introduce />
      <Core />
      <TrafficInformation />
      <SponsorArea />
    </Fragment>
  );
};
export default Home;
