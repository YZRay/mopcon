// SpeakerModal.js
import React, { Fragment } from "react";
import classes from "./SpeakerModal.module.css";
import ReactDOM from "react-dom";
import { ReactComponent as GithubIcon } from "../../asset/Icon/github.svg";
import { ReactComponent as FBIcon } from "../../asset/Icon/FB.svg";
import { ReactComponent as TwitterIcon } from "../../asset/Icon/twitter.svg";
import { ReactComponent as SiteIcon } from "../../asset/Icon/site.svg";
import { ReactComponent as CloseIcon } from "../../asset/Icon/carbon_close-outline.svg";
import { ReactComponent as CalendarIcon } from "../../asset/Icon/calendar.svg";
import { ReactComponent as ShareIcon } from "../../asset/Icon/share.svg";

const SpeakerModal = (props) => {
  const { speaker, onClose } = props;

  const handleBackdropClick = (event) => {
    event.stopPropagation();
  };

  const hastag = speaker.hashTag.map((map) => {
    return (
      <span key={map} className={classes.hashtag}>
        {map}
      </span>
    );
  });

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={classes.backdrop} onClick={onClose}>
          <div className={classes.warp} onClick={handleBackdropClick}>
            <button type="button" className={classes.btn} onClick={onClose}>
              <CloseIcon />
            </button>
            <div className={classes.container}>
              <div className={classes["speaker-container"]} key={speaker.name}>
                <div className={classes.social}>
                  <div className={classes["img-container"]}>
                    <img src={speaker.Img} alt={speaker.name} />
                  </div>
                  <div className={classes["icon-container"]}>
                    <a href={speaker.fb} className={classes.icon}>
                      <FBIcon />
                    </a>
                    <a href={speaker.gitHub} className={classes.icon}>
                      <GithubIcon />
                    </a>
                    <a href={speaker.twitter} className={classes.icon}>
                      <TwitterIcon />
                    </a>
                    <a href={speaker.website} className={classes.icon}>
                      <SiteIcon />
                    </a>
                  </div>
                </div>
                <div>
                  <p className={classes.name}>{speaker.name}</p>
                  <p className={classes.job}>{speaker.jobTitle}</p>
                  <p className={classes.introudce}>{speaker.introduce}</p>
                </div>
              </div>
            </div>
            <div className={classes["angeda-container"]}>
              {hastag}
              <div className={classes.content}>
                <span className={classes.title}>議程主題名稱</span>
                <p>{speaker.agendaTopicName}</p>
              </div>
              <div className={classes.content}>
                <span className={classes.title}>議程簡介</span>
                <p>{speaker.introductionToTheAgenda}</p>
              </div>
              <div className={classes.content}>
                <span className={classes.title}>目標會眾</span>
                <p>{speaker.targetAudience}</p>
              </div>
              <div className={classes.content}>
                <span className={classes.title}>先備知識</span>
                <p>{speaker.priorKnowledge}</p>
              </div>
              <div className={classes.content}>
                <span className={classes.title}>會眾預期收穫</span>
                <p>{speaker.expectedHarvest}</p>
              </div>
              <div className={classes.content}>
                <span className={classes.title}>議程地點</span>
                <p>{speaker.agendaLocation}</p>
              </div>
              <div className={classes["button-container"]}>
                <a href="/link1" className={classes.button}>
                  <CalendarIcon />
                  加入行事曆
                </a>
                <a href="/link2" className={classes.button}>
                  <ShareIcon />
                  分享議程
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default SpeakerModal;
