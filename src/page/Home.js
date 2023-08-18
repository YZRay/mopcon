import { Fragment } from "react";

import Hero from "../components/Layout/Hero";
import Introduce from "../components/Layout/introduce";
import Core from "../components/Layout/Core";
import TrafficInformation from "../components/Layout/TrafficInformation";
import SponsorArea from "../components/Layout/SponsorArea";
import homeHeroContent from "../data/HeroContent/homeHeroData";

const Home = () => {
  return (
    <Fragment>
      <Hero {...homeHeroContent} />
      <Introduce />
      <Core />
      <TrafficInformation />
      <SponsorArea />
    </Fragment>
  );
};
export default Home;
