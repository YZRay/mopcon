import classes from "./Navbar.module.css";
import { ReactComponent as ArrowIcon } from "../asset/Icon/ep_arrow-down.svg";
const Navbar = () => {
  return (
    <ul className={classes.button}>
      <li className={classes.nav}>
        <a href="/host-community">主辦社群</a>
      </li>
      <li className={classes.nav}>
        <a href="/some-link2">
          議程介紹
          <ArrowIcon />
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
        <a href="/some-link">共筆文件</a>
      </li>
      <li className={classes.nav}>
        <a href="/time-machine">時光機</a>
      </li>
    </ul>
  );
};

export default Navbar;
