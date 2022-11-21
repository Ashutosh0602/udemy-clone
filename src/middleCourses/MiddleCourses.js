import React from "react";
import "./middleCourses.css";

export const MiddleCourses = () => {
  return (
    <section className="middleCourse_section">
      <div className="text-4xl font-semibold my-5">
        A broad selection of courses
      </div>
      <div className="text-2xl my-3">
        Choose from 204,000 online video courses with new additions published
        every month
      </div>
      <div className="flex gap-x-8 font-semibold course">
        <div>Python</div>
        <div>Excel</div>
        <div>Web development</div>
        <div>Javascript</div>
        <div>Data Science</div>
        <div>AWS Cetrification</div>
        <div>Drawing</div>
      </div>
      <div className="middleCourse_section_inner">
        <div className="text-2xl font-semibold my-3">
          Expand your career opportunities with Python
        </div>
        <div className="middleCourse_section_inner_detail">
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to...
        </div>
        <div>
          <button className="explore_button font-semibold">
            <div>Explore Python</div>
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
};
