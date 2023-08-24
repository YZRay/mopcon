import classes from "./AgendaCard.module.css";
import { ReactComponent as PinIcon } from "../asset/Icon/location.svg";
import { Fragment } from "react";

const AgengaCard = ({ agendaData }) => {
  const card = agendaData.map((timeSlot, index) => (
    <Fragment key={index}>
      <section key={index} className={classes.container}>
        <p>{timeSlot.start}</p>
        {timeSlot.agenda.map((item, itemIndex) => (
          <div key={itemIndex} className={classes.card}>
            <div className={classes.text}>
              <span>{item.title}</span>
              {item.tab.map((tab, tabIndex) => (
                <span key={tabIndex} className={classes.tab}>
                  {tab}
                </span>
              ))}
            </div>
            <div className={classes.content}>
              <span>{item.name}</span>
              <span className={classes.icon}>
                <PinIcon />
                <span>{item.location}</span>
              </span>
            </div>
          </div>
        ))}
      </section>
      <div key={index + "_break"} className={classes.break}>
        <span>{timeSlot.break}</span>
        <span>{timeSlot.text}</span>
      </div>
    </Fragment>
  ));

  return (
    <div className={classes.wrap}>
      {card}
      <section className={classes.mopnight}>
        <div className={classes.break}>
          <span>18:30-</span>
          <span>MOPNight(講者晚宴)</span>
        </div>
      </section>
    </div>
  );
};

export default AgengaCard;
