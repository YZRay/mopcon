import classes from "./NavModal.module.css";
import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import { ReactComponent as Close } from "../../asset/Icon/carbon_close-outline.svg";
import { ReactComponent as ArrowIcon } from "../../asset/Icon/ep_arrow-down.svg";

const NavModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={classes.modalBackdrop}>
          <ul className={classes.container}>
            <li className={classes.nav}>
              <a href="/host-community">主辦社群</a>
            </li>
            <li className={classes.nav}>
              <a href="/some-link1">
                議程介紹 <ArrowIcon style={{ stroke: "#ef7b4a" }} />
              </a>
            </li>
            <li className={classes.nav}>
              <a href="/speaker">講者陣容</a>
            </li>
            <li className={classes.nav}>
              <a href="/sponsor">贊助夥伴</a>
            </li>
            <li className={classes.nav}>
              <a href="/ticket">票種介紹</a>
            </li>
            <li className={classes.nav}>
              <a href="/some-link1">共筆文件</a>
            </li>
            <li className={classes.nav}>
              <a href="/time-machine">時光機</a>
            </li>
          </ul>

          <button className={classes.btn} onClick={props.onClose}>
            <Close />
          </button>
        </div>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};
export default NavModal;
