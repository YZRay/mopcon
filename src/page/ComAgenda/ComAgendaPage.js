import Hero from "../../components/Layout/Hero";
import { Fragment, useState } from "react";
import ComAgendaData from "../../data/HeroContent/ComAgendaData.json";
import DateTab from "../../components/Tab/DateTab";
import ComAgendaCard from "./ComAgendaCard";
import ComAgendaDayOne from "../../data/Agenda/ComAgendaDayOne.json";
import ComAgendaDayTwo from "../../data/Agenda/ComAgendaDayTwo.json";

const MainAgenda = () => {
  const [selectedDate, setSelectedDate] = useState("Day1");

  const handDateClick = (date) => {
    setSelectedDate(date);
  };
  const contentData =
    selectedDate === "Day1" ? ComAgendaDayOne : ComAgendaDayTwo;
  return (
    <Fragment>
      <Hero {...ComAgendaData} />
      <DateTab selectedDate={selectedDate} onDateClick={handDateClick} />
      <ComAgendaCard agendaData={contentData} />
    </Fragment>
  );
};

export default MainAgenda;
