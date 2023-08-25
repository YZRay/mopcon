import classes from "./SponsorItem.module.css";

const SponosorItem = (props) => {
  return (
    <div className={classes["sponsor-container"]}>
      <div className={classes.sponsor}>
        <img src={props.logo} alt={props.logo}></img>
      </div>
      <span>{props.name}</span>
    </div>
  );
};

export default SponosorItem;
