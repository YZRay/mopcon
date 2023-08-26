import classes from "./Hero.module.css";
import { Fragment } from "react";
import bgimg from "../asset/herobgimg.png";
import bgimgSmall from "../asset/herobgimg-small.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = (props) => {
  return (
    <Fragment>
      <div className={classes.layout}>
        <LazyLoadImage
          effect="blur"
          src={bgimg}
          alt="bgImg"
          className={classes.img}
        />
        <LazyLoadImage
          effect="blur"
          src={bgimgSmall}
          alt="bgImg"
          className={classes["img-small"]}
        />
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
      </div>
    </Fragment>
  );
};

export default Hero;
