import React, { Fragment, useState } from "react";
import Hero from "../../components/Layout/Hero";
import TabBtn from "../../components/Tab/TabBtn";
import SpeakerCard from "./SpeakerCard";
import SpeakerModal from "./Modal/SpeakerModal";
import speakerHeroContent from "../../data/HeroContent/speakerHeroData";
import ScheduleTab from "../../data/ScheduleTab";
import SpeakerContent from "../../data/Speaker/SpeakerContent.json";

const SpeakerPage = () => {
  const [selectedTab, setSelectedTab] = useState("Android");
  const [openModal, setOpenModal] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  // 打開 modal 時取消背景滾動，取得對應的speaker資料
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
        tab={ScheduleTab}
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

export default SpeakerPage;
