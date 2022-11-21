import React from "react";
import "./anotherCourses.css";
import star from "../assets/star.png";
import play from "../assets/play.png";
import infinity from "../assets/infinity.png";

export const AnotherCourses = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-between p-5 upperBound ">
        <div className="flex">
          <div className="boundImage">
            <img src={play} alt="star" />
          </div>
          <div className="items-stretch text-1xl font-semibold boundText">
            <div>Learn in-demand skills with over 204,000 video courses</div>
          </div>
        </div>
        <div className="flex">
          <div className="boundImage">
            <img src={star} alt="play" />
          </div>
          <div className="items-stretch self-stretch text-1xl font-semibold boundText">
            <div>Choose courses taught by real-world experts</div>
          </div>
        </div>
        <div className="flex">
          <div className="boundImage">
            <img src={infinity} alt="infinity" />
          </div>
          <div className="text-1xl font-semibold boundText">
            <div>
              Learn at your own pace, with lifetime access on mobile and desktop
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};
