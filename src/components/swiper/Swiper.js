import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./Swiper.css";

import photo2015 from "../asset/groupphoto/groupphoto_2015.jpg";
import photo2016 from "../asset/groupphoto/groupphoto_2016.jpg";
import photo2017 from "../asset/groupphoto/groupphoto_2017.jpg";
import photo2018 from "../asset/groupphoto/groupphoto_2018.jpg";
import photo2019 from "../asset/groupphoto/groupphoto_2019.jpg";
import photo2020 from "../asset/groupphoto/groupphoto_2020.jpg";

const SwiperPhoto = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-size": "22px",
        }}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        speed={1500}
      >
        <SwiperSlide>
          <div className="photo-container">
            <img src={photo2015} alt="photo2015" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="photo-container">
            <img src={photo2016} alt="photo2016" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="photo-container">
            <img src={photo2017} alt="photo2017" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="photo-container">
            <img src={photo2018} alt="photo2018" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" photo-container">
            <img src={photo2019} alt="photo2019" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" photo-container">
            <img src={photo2020} alt="photo2020" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperPhoto;
