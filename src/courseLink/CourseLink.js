import React from "react";
import "./courseLink.css";

export const CourseLink = () => {
  return (
    <section className="courseLink_sec">
      <div className="text-2xl font-semibold mb-4">
        Featured topics by category
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-wrap grow justify-around">
          <div>
            <div className="text-xl font-semibold mb-4">Development</div>
            <div className="mb-4">
              <div>
                <a
                  className="course_link font-semibold text-lg "
                  href="www.udemy.com"
                >
                  Python
                </a>
              </div>
              <div>36,354,994 students</div>
            </div>
            <div className="mb-4">
              <div>
                <a
                  className="course_link font-semibold text-lg"
                  href="www.udemy.com"
                >
                  Wed Development
                </a>
              </div>
              <div>11,415,615 students</div>
            </div>
            <div className="mb-4">
              <div>
                <a
                  className="course_link font-semibold text-lg"
                  href="www.udemy.com"
                >
                  Machine Learning
                </a>
              </div>
              <div>7,070,015 students</div>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-xl font-semibold mb-4">Business</div>
            <div className="mb-4">
              <div>
                <a
                  className="course_link font-semibold text-lg"
                  href="www.udemy.com"
                >
                  Financial Analysis
                </a>
              </div>
              <div>1,195,282 students</div>
            </div>
            <div className="mb-4">
              <div>
                <a
                  className="course_link font-semibold text-lg"
                  href="www.udemy.com"
                >
                  SQL
                </a>
              </div>
              <div>5,977,561 students</div>
            </div>
            <div className="mb-4">
              <div>
                <a
                  className="course_link font-semibold text-lg"
                  href="www.udemy.com"
                >
                  PMP
                </a>
              </div>
              <div>1,733,398 students</div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap grow justify-around">
          <div>
            <div className="text-xl font-semibold mb-4">IT and Software</div>
            <div className="mb-4">
              <div>
                <a
                  className="course_link font-semibold text-lg"
                  href="www.udemy.com"
                >
                  AWS Cetificate
                </a>
              </div>
              <div>6,078,244 students</div>
            </div>
            <div className="mb-4">
              <div>
                <a
                  className="course_link font-semibold text-lg"
                  href="www.udemy.com"
                >
                  Ethical Hacking
                </a>
              </div>
              <div>10,931,066 students</div>
            </div>
            <div className="mb-4">
              <div>
                <a
                  className="course_link font-semibold text-lg"
                  href="www.udemy.com"
                >
                  Cyber Security
                </a>
              </div>
              <div>3,998,037 students</div>
            </div>
          </div>
          <div>
            <div className="text-xl font-semibold mb-4">Design</div>
            <div className="mb-4">
              <div>
                <a
                  className="course_link font-semibold text-lg"
                  href="www.udemy.com"
                >
                  Photoshop
                </a>
              </div>
              <div>10,909,736 students</div>
            </div>
            <div className="mb-4">
              <div>
                <a
                  className="course_link font-semibold text-lg"
                  href="www.udemy.com"
                >
                  Graphic Design
                </a>
              </div>
              <div>3,381,052 students</div>
            </div>
            <div className="mb-4">
              <div>
                <a
                  className="course_link font-semibold text-lg"
                  href="www.udemy.com"
                >
                  Drawing
                </a>
              </div>
              <div>2,410,849 students</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="course_explore font-semibold">
          Explore more topics
        </button>
      </div>
    </section>
  );
};
