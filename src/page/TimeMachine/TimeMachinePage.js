import Hero from "../../components/Layout/Hero";
import { Fragment } from "react";
import TimeMachineHeroContent from "../../data/HeroContent/TimeMachineHeroData";

const TimeMachinePage = () => {
  return (
    <Fragment>
      <Hero {...TimeMachineHeroContent} />
    </Fragment>
  );
};

export default TimeMachinePage;
