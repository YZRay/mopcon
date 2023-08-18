import classes from "./Hero.module.css";
import { Fragment } from "react";
import PerspectiveLine from "../asset/PerspectiveLine.png";
import Circle from "../asset/circle.png";
import Element from "../asset/element.png";
import LineMobile from "../asset/PerspectiveLine-375px.png";

const Hero = (props) => {
  return (
    <Fragment>
      <div className={classes.layout}>
        <p
          className={`${classes.title} ${
            props.page === "Home" ? classes["home-title"] : ""
          } `}
        >
          {props.title}
        </p>
        {props.content.map((text, i) => (
          <p
            target="blank"
            className={`${
              props.page === "Home" ? classes["home-text"] : classes.text
            } ${props.page === "host" ? classes["text-left"] : ""}`}
            key={i}
          >
            {text}
          </p>
        ))}
        <a
          target="blank"
          href={props.link}
          className={`${classes.btn} ${
            props.btn === "" ? classes["btn-none"] : ""
          } ${props.page === "Home" ? "" : classes["btn-reverse"]}`}
        >
          {props.btn}
          <span className={classes.icon}>{props.btnIcon}</span>
        </a>
        <div className={classes.imgContainer}>
          <img src={Element} alt="Element" className={classes.element} />
          <img
            src={PerspectiveLine}
            alt="PerspectiveLine"
            className={classes.perspectiveLine}
          />
          <img src={LineMobile} alt="Line" className={classes.lineMobile} />
          <img src={Circle} alt="Circle" className={classes.circle} />
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
