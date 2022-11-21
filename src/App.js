import { AnotherCourses } from "./anotherCourses/AnotherCourses";
import "./App.css";
import { CourseLink } from "./courseLink/CourseLink";
import { MiddleCourses } from "./middleCourses/MiddleCourses";
import { Navbar } from "./navbar/Navbar";
import { Sponsor } from "./sponsor/Sponsor";
import { UpperSection } from "./topSection/UpperSection";

function App() {
  return (
    <div>
      <Navbar />
      <UpperSection />
      <MiddleCourses />
      <AnotherCourses />
      <CourseLink />
      <Sponsor />
    </div>
  );
}

export default App;
