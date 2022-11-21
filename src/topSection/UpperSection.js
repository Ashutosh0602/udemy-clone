import React from "react";
import "./upperSection.css";

export const UpperSection = () => {
  return (
    <section className="flex flex-col items-center upperSection">
      <div className="upperSection_banner">
        <img
          className="banner_img"
          src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/b8f46419-eca3-44c1-8ba0-ed2ca89f8884.jpg"
        />
      </div>
      <div className="upperSection_cont">
        <div className="text-5xl font-medium">New to Udemy? Lucky you.</div>
        <div className="text-lg text-slate-600">
          Courses start at ₹449. Get your new-student offer before it expires.
        </div>
      </div>
    </section>
  );
};
