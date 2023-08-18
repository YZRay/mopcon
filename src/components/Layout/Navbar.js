import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../asset/Icon/ep_arrow-down.svg";

const Navbar = () => {
  return (
    <ul className={classes.button}>
      <li className={classes.nav}>
        <Link to="/host-community">主辦社群</Link>
      </li>
      <li className={classes.nav}>
        <Link to="/some-link2">
          議程介紹
          <ArrowIcon />
        </Link>
      </li>
      <li className={classes.nav}>
        <Link to="/speaker">講者陣容</Link>
      </li>
      <li className={classes.nav}>
        <Link to="/sponsor">贊助夥伴</Link>
      </li>
      <li className={classes.nav}>
        <Link to="/ticket">票種介紹</Link>
      </li>
      <li className={classes.nav}>
        <Link to="/some-link">共筆文件</Link>
      </li>
      <li className={classes.nav}>
        <Link to="/time-machine">時光機</Link>
      </li>
    </ul>
  );
};

export default Navbar;
