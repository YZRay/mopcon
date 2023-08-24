import Hero from "../components/Layout/Hero";
import { Fragment, useState } from "react";
import Card from "../components/Layout/Card";
import TabBtn from "../components/Tab/TabBtn";
import Behaviour from "../components/Layout/Behaviour";
import communityContent from "../data/hostCommunity/communityData";
import teamContent from "../data/hostCommunity/teamData";
import communityHeroContent from "../data/HeroContent/hostCommunityHeroData";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as FBIcon } from "../components/asset/Icon/FB.svg";

const tab = [
  { text: "主辦團隊", type: "team", key: uuidv4(), page: "host" },
  { text: "參與社群", type: "community", key: uuidv4(), page: "host" },
];

const HostCommunity = () => {
  const [selectedTab, setSelectedTab] = useState("team");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const contentData = selectedTab === "team" ? teamContent : communityContent;
  return (
    <Fragment>
      <Hero {...communityHeroContent} btnIcon={<FBIcon />} />
      <TabBtn tab={tab} selectedTab={selectedTab} onTabClick={handleTabClick} />
      {contentData.map((card) => (
        <Card {...card} selectedTab={selectedTab} />
      ))}
      <Behaviour />
    </Fragment>
  );
};

export default HostCommunity;
