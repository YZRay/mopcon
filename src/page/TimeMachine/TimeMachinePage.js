import Hero from "../../components/Layout/Hero";
import { Fragment } from "react";
import TimeMachineHeroContent from "../../data/HeroContent/TimeMachineHeroData";
import TimeMachineSection from "./TimeMachineSection";
import MopconTimeMachineContent from "../../data/TimeMachine/MopconTimeMachineContent";

const TimeMachinePage = () => {
  return (
    <Fragment>
      <Hero {...TimeMachineHeroContent} />
      <h2>時光機</h2>
      <TimeMachineSection content={MopconTimeMachineContent} />
    </Fragment>
  );
};

export default TimeMachinePage;
