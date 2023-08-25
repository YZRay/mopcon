import Hero from "../../components/Layout/Hero";
import React, { Fragment, useState } from "react";
import TabBtn from "../../components/Tab/TabBtn";
import agendaTab from "../../data/AgengaTab";
import MainAgendaData from "../../data/HeroContent/MainAgendaData.json";
import DateTab from "../../components/Tab/DateTab";
import AgengaCard from "./AgendaCard";
import AgendaDayOne from "../../data/Agenda/AgendaDayOne.json";
import AgendaDayTwo from "../../data/Agenda/AgendaDayTwo.json";

const MainAgendaPage = () => {
  const [selectedTab, setSelectedTab] = useState("Android");
  const [selectedDate, setSelectedDate] = useState("Day1");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  // 點擊tab取得相對應的日期
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  // 透過日期取得對應的資料傳入AgendaCard
  const contentData = selectedDate === "Day1" ? AgendaDayOne : AgendaDayTwo;

  return (
    <Fragment>
      <Hero {...MainAgendaData} />
      <TabBtn
        tab={agendaTab}
        selectedTab={selectedTab}
        onTabClick={handleTabClick}
      />
      <DateTab selectedDate={selectedDate} onDateClick={handleDateClick} />
      <AgengaCard agendaData={contentData} />
    </Fragment>
  );
};

export default MainAgendaPage;
