import React from "react";
import { Link } from "react-router-dom";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const programsData = [
  {
    id: 1,
    title: "Graduation Degree",
    mainImg: program_1,
    icon: program_icon_1,
  },
  {
    id: 2,
    title: "Masters Degree",
    mainImg: program_2,
    icon: program_icon_2,
  },
  {
    id: 3,
    title: "Post Degree",
    mainImg: program_3,
    icon: program_icon_3,
  },
];

const Programs = () => {
  return (
    <div className="programs">
      {programsData.map((program) => (
        <div className="program" key={program.id}>
          <Link to={`/program/${program.id}`}>
            <img src={program.mainImg} alt={program.title} />
            <div className="caption">
              <img src={program.icon} alt={program.title} />
              <p>{program.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Programs;
