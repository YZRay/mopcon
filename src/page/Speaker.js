import React, { Fragment, useState } from "react";
import Hero from "../components/Layout/Hero";
import TabBtn from "../components/Tab/TabBtn";
import SpeakerCard from "../components/Layout/SpeakerCard";
import SpeakerModal from "../components/Layout/Modal/SpeakerModal";
import speakerHeroContent from "../data/HeroContent/speakerHeroData";
import agendaTab from "../data/AgengaTab";
import SpeakerContent from "../data/SpeakerContent";

const Speaker = () => {
  const [selectedTab, setSelectedTab] = useState("Android");
  const [openModal, setOpenModal] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const showModalHandle = (speaker) => {
    setSelectedSpeaker(speaker);
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const hideModalHandle = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
  };

  const paragraphStyle = {
    fontSize: "24px",
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "40px",
  };

  return (
    <Fragment>
      {openModal && (
        <SpeakerModal speaker={selectedSpeaker} onClose={hideModalHandle} />
      )}

      <Hero {...speakerHeroContent} />
      <p style={paragraphStyle}>講者陣容</p>
      <TabBtn
        tab={agendaTab}
        selectedTab={selectedTab}
        onTabClick={handleTabClick}
      />
      <SpeakerCard
        SpeakerContent={SpeakerContent}
        onOpenModal={showModalHandle}
      />
    </Fragment>
  );
};

export default Speaker;
