import classes from "./ComingSoon.module.css";
import img from "../../components/asset/TicketComingSoon.png";

const ComingSoon = () => {
  return (
    <>
      <div className={classes.container}>
        <p className={classes.p}>票種介紹</p>
        <div className={classes.centeredImgStyle}>
          <img src={img} alt="COMING SOON"></img>
        </div>
        <p className={classes.h1}>COMING SOON</p>
        <p className={classes.p}>我們正緊鑼密鼓的規劃中，敬請期待(*‘ v`*)</p>
      </div>
      <div className={classes.container}>
        <p className={classes.p}>周邊商品</p>
        <div className={classes.centeredImgStyle}>
          <img src={img} alt="COMING SOON"></img>
        </div>
        <p className={classes.h1}>COMING SOON</p>
        <p className={classes.p}>我們正緊鑼密鼓的規劃中，敬請期待(*‘ v`*)</p>
      </div>
    </>
  );
};
export default ComingSoon;
