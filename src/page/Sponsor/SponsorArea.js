import { Fragment } from "react";
import SponsorSection from "./SponsorSection";
// Icon
import { ReactComponent as UniverseIcon } from "../../components/asset/sponsorIcon/universe.svg";
import { ReactComponent as GalaxyIcon } from "../../components/asset/sponsorIcon/galaxy.svg";
import { ReactComponent as PlanetIcon } from "../../components/asset/sponsorIcon/planet.svg";
import { ReactComponent as CometIcon } from "../../components/asset/sponsorIcon/comet.svg";
import { ReactComponent as EducationIcon } from "../../components/asset/sponsorIcon/cil_education.svg";
import { ReactComponent as ThanksIcon } from "../../components/asset/sponsorIcon/ph_hand-heart-thin.svg";
//Sponsor
import UniverseSponsor from "../../data/Sponsor/UniverseSponsor.json";
import GalaxySponsor from "../../data/Sponsor/GalaxySponosr.json";
import PlanetSponsor from "../../data/Sponsor/PlanetSponsor.json";
import CometSponsor from "../../data/Sponsor/CometSponsor.json";
import EducationSponsor from "../../data/Sponsor/EducationSponsor.json";
import SpecialThanksSponsor from "../../data/Sponsor/SpecialThanksSponsor.json";

const SponsorArea = () => {
  return (
    <Fragment>
      <h2>我們的夥伴們</h2>
      <SponsorSection
        Icon={<UniverseIcon />}
        Content={UniverseSponsor}
        Level="宇宙級"
      />
      <SponsorSection
        Icon={<GalaxyIcon />}
        Content={GalaxySponsor}
        Level="銀河級"
      />
      <SponsorSection
        Icon={<PlanetIcon />}
        Content={PlanetSponsor}
        Level="行星級"
      />
      <SponsorSection
        Icon={<CometIcon />}
        Content={CometSponsor}
        Level="彗星級"
      />
      <SponsorSection
        Icon={<EducationIcon />}
        Content={EducationSponsor}
        Level="教育贊助"
      />
      <SponsorSection
        Icon={<ThanksIcon />}
        Content={SpecialThanksSponsor}
        Level="特別感謝"
      />
    </Fragment>
  );
};

export default SponsorArea;
