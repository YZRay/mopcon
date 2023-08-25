import classes from "./TrafficInformation.module.css";
import Location from "../../components/asset/location.png";
import { ReactComponent as ExternalIcon } from "../../components//asset/Icon/system-uicons_external.svg";
import Traffic from "./Traffic";

const TrafficInformation = () => {
  return (
    <div className={classes.background}>
      <p className={classes.title}>會場資訊</p>
      <div className={classes.container}>
        <section className={classes["location-information"]}>
          <div className={classes["location-img"]}>
            <img src={Location} alt="Location"></img>
          </div>
          <div className={classes["loaction-text"]}>
            <p>
              高雄展覽館
              <br />
              Kaohsiung Exhibition Center
              <br />
              高雄市前鎮區成功二路39號
            </p>
            <a
              className={classes.btn}
              href="https://goo.gl/maps/KERub4DGSAztf57c7"
              target="blank"
            >
              <span>Google 地圖</span>
              <ExternalIcon className={classes.icon} />
            </a>
          </div>
        </section>
      </div>
      <Traffic />
    </div>
  );
};

export default TrafficInformation;
