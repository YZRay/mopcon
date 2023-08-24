import Hero from "../components/Layout/Hero";
import { Fragment, useState } from "react";
import ComAgendaData from "../data/HeroContent/ComAgendaData.json";
import DateTab from "../components/Tab/DateTab";

const MainAgenda = () => {
  const [selectedDate, setSelectedDate] = useState("Day1");
  const handDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <Fragment>
      <Hero {...ComAgendaData} />
      <DateTab selectedDate={selectedDate} onDateClick={handDateClick} />
    </Fragment>
  );
};

export default MainAgenda;
