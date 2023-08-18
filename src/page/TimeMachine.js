import Hero from "../components/Layout/Hero";
import { Fragment } from "react";
import timeMachineHeroContent from "../data/HeroContent/timeMachineHeroData";

const TimeMachine = () => {
  return (
    <Fragment>
      <Hero {...timeMachineHeroContent} />
    </Fragment>
  );
};

export default TimeMachine;
