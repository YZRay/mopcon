import Hero from "../components/Layout/Hero";
import React, { Fragment, useState } from "react";
import TabBtn from "../components/Tab/TabBtn";
import agendaTab from "../data/AgengaTab";
import MainAgendaData from "../data/HeroContent/MainAgendaData.json";
import DateTab from "../components/Tab/DateTab";
import AgengaCard from "../components/Layout/AgendaCard";
import AgendaDayOne from "../data/Agenda/AgendaDayOne.json";
import AgendaDayTwo from "../data/Agenda/AgendaDayTwo.json";

const MainAgenda = () => {
  const [selectedTab, setSelectedTab] = useState("Android");
  const [selectedDate, setSelectedDate] = useState("Day1");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    console.log(date);
  };
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

export default MainAgenda;
