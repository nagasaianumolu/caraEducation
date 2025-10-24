import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProgramCourse.css";
import course_img from "../../assets/course-img.jpg"; // placeholder image
import ece from "../../assets/ECE.jpg";
import me from "../../assets/ME.jpg";
import ce from "../../assets/CE.jpg";
import it from "../../assets/IT.jpg";
import eee from "../../assets/EEE.jpg";
import ai from "../../assets/AI.jpg";
import cs from "../../assets/CS.png";
import cc from "../../assets/CC.jpg";
import r from "../../assets/Robotics.jpg";
import da from "../../assets/DA.jpg";
import dm from "../../assets/DM.jpg";
import bc from "../../assets/BC.jpg";
import dss from "../../assets/DSS.jpg";
import es from "../../assets/ES.jpg";
import fsd from "../../assets/FSD.jpg";
import iot from "../../assets/IoT.jpg";
import uiux from "../../assets/UI.jpg";
const allPrograms = [
  {
    id: 1,
    title: "Graduation Degree",
    courses: [
      { name: "CSE", img: course_img },
      { name: "ECE", img: ece },
      { name: "ME", img: me },
      { name: "CE", img: ce },
      { name: "IT", img: it },
      { name: "EEE", img: eee },
    ],
  },
  {
    id: 2,
    title: "Masters Degree",
    courses: [
      { name: "AI & ML", img: ai },
      { name: "Data Science", img: dss },
      { name: "Embedded Systems", img: es },
      { name: "Cybersecurity", img: cs },
      { name: "Cloud Computing", img: cc },
      { name: "Robotics", img: r },
    ],
  },
  {
    id: 3,
    title: "Post Degree",
    courses: [
      { name: "Data Analytics", img: da },
      { name: "Digital Marketing", img: dm },
      { name: "Blockchain", img: bc },
      { name: "Full Stack Dev", img: fsd },
      { name: "IoT", img: iot },
      { name: "UI/UX Design", img: uiux },
    ],
  },
];

const ProgramCourses = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const program = allPrograms.find((p) => p.id === parseInt(id));

  if (!program) return <div>Program not found!</div>;

  return (
    <div className="program-courses-container">
      <div className="header-section">
        <h1>{program.title}</h1>
        <p>Explore our top-rated courses designed for excellence and future-ready skills.</p>
      </div>

      <div className="courses-grid">
        {program.courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.img} alt={course.name} />
            <div className="course-overlay">
              <h3>{course.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <button
        className="apply-btn"
        onClick={() =>
          navigate("/apply", {
            state: {
              programTitle: program.title,
              courses: program.courses.map((c) => c.name),
            },
          })
        }
      >
        Apply Now
      </button>
    </div>
  );
};

export default ProgramCourses;
