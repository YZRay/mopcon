import Hero from "../components/Layout/Hero";
import ticketHeroContent from "../data/HeroContent/ticketHeroData";
import { Fragment } from "react";

const Ticket = () => {
  return (
    <Fragment>
      <Hero {...ticketHeroContent} />
    </Fragment>
  );
};

export default Ticket;
