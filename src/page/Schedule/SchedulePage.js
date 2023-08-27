import Hero from "../../components/Layout/Hero";
import React, { Fragment, useState } from "react";
import TabBtn from "../../components/Tab/TabBtn";
import ScheduleTab from "../../data/ScheduleTab";
import ScheduleData from "../../data/HeroContent/ScheduleData.json";
import DateTab from "../../components/Tab/DateTab";
import ScheduleCard from "./ScheduleCard";
import ScheduleDayOne from "../../data/Schedule/ScheduleDayOne.json";
import ScheduleDayTwo from "../../data/Schedule/ScheduleDayTwo.json";

const SchedulePage = () => {
  const [selectedTab, setSelectedTab] = useState("Android");
  const [selectedDate, setSelectedDate] = useState("Day1");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  // 點擊tab取得相對應的日期
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  // 透過日期取得對應的資料傳入Card
  const contentData = selectedDate === "Day1" ? ScheduleDayOne : ScheduleDayTwo;

  return (
    <Fragment>
      <Hero {...ScheduleData} />
      <TabBtn
        tab={ScheduleTab}
        selectedTab={selectedTab}
        onTabClick={handleTabClick}
      />
      <DateTab selectedDate={selectedDate} onDateClick={handleDateClick} />
      <ScheduleCard scheduleData={contentData} />
    </Fragment>
  );
};

export default SchedulePage;
