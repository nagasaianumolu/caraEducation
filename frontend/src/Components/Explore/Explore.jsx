import React, { useEffect, useRef, useState } from "react";
import "./Explore.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Leadership
import chairmanImg from "../../assets/principal.webp";
import viceChairmanImg from "../../assets/vc.webp";
import directorImg from "../../assets/d.webp";
import vicePrincipalImg from "../../assets/vp.jpg";
import principalImg from "../../assets/p.jpg";

// Placement Logos
import tcs from "../../assets/TCS.avif";
import infosys from "../../assets/in.jpg";
import wipro from "../../assets/wipro.webp";
import cognizant from "../../assets/cog.jpeg";
import accenture from "../../assets/acc.jpeg";

// Coordinators
import coordinator1 from "../../assets/spo.webp";

import coordinator2 from "../../assets/apo.jpg";

// Student Testimonials
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Explore = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef();

  const testimonials = [
    {
      img: user1,
      name: "Rahul Sharma",
      role: "Software Engineer — TCS",
      quote:
        "Cara Education gave me the perfect platform to learn and grow. The placement training sessions helped me crack interviews confidently.",
    },
    {
      img: user2,
      name: "Priya Reddy",
      role: "System Analyst — Infosys",
      quote:
        "The hands-on projects and mentorship prepared me for real-world challenges in IT.",
    },
    {
      img: user3,
      name: "Kiran Kumar",
      role: "Associate Consultant — Wipro",
      quote:
        "I’m grateful to the placement cell for constant guidance and opportunities with reputed companies.",
    },
    {
      img: user4,
      name: "Ananya Gupta",
      role: "Business Analyst — Cognizant",
      quote:
        "Cara Education not only taught me technical skills but helped me grow as a confident individual.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const slideForward = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slideBackward = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="explore container" id="explore">
      <h2 data-aos="fade-up">Explore Cara Education</h2>
        {/* Leadership Messages Section */}
<div className="leadership-messages">

  {/* Chairman */}
  <div className="explore-section" data-aos="fade-up">
    <img src={chairmanImg} alt="Chairman" className="leader-img" />
    <div className="explore-text">
      <h3>Message from the Chairman</h3>
      <p>
        At <strong>Cara Education</strong>, our mission is to provide students with
        a transformative education that fosters leadership, integrity, and global
        awareness. We believe education is not just about success, but about
        shaping a better tomorrow.
      </p>
      <p><strong>— Mr. Ramesh Babu, Chairman</strong></p>
    </div>
  </div>

  {/* Vice Chairman */}
  <div className="explore-section reverse" data-aos="fade-up">
    <img src={viceChairmanImg} alt="Vice Chairman" className="leader-img" />
    <div className="explore-text">
      <h3>Message from the Vice Chairman</h3>
      <p>
        We envision a learning ecosystem that inspires innovation and nurtures
        students to achieve excellence through creativity, collaboration, and
        continuous learning.
      </p>
      <p><strong>— Mrs. Kavitha Reddy, Vice Chairman</strong></p>
    </div>
  </div>

  {/* Director */}
  <div className="explore-section " data-aos="fade-up">
    <img src={directorImg} alt="Director" className="leader-img" />
    <div className="explore-text">
      <h3>Message from the Director</h3>
      <p>
        We are committed to creating an environment where students explore
        their potential through research, innovation, and industry exposure.
        Our focus is on developing well-rounded individuals ready for global
        challenges.
      </p>
      <p><strong>— Dr. Rajesh Kumar, Director</strong></p>
    </div>
  </div>

  {/* Principal */}
  <div className="explore-section reverse" data-aos="fade-up">
    <img src={principalImg} alt="Principal" className="leader-img" />
    <div className="explore-text">
      <h3>Message from the Principal</h3>
      <p>
        Welcome to <strong>Cara Education</strong> — where innovation meets
        excellence! We empower students through holistic education that
        blends technology, creativity, and moral values.
      </p>
      <p><strong>— Dr. Anitha Reddy, Principal</strong></p>
    </div>
  </div>

  {/* Vice Principal */}
  <div className="explore-section" data-aos="fade-up">
    <img src={vicePrincipalImg} alt="Vice Principal" className="leader-img" />
    <div className="explore-text">
      <h3>Message from the Vice Principal</h3>
      <p>
        At Cara Education, we continuously strive to enhance learning through
        technology and mentorship, ensuring our students are industry-ready and
        confident in their abilities.
      </p>
      <p><strong>— Dr. Mahesh Varma, Vice Principal</strong></p>
    </div>
  </div>
</div>

      {/* Mission & Vision */}
      <div className="mission-vision" data-aos="fade-up">
        <div className="card">
          <h3>🎯 Our Mission</h3>
          <p>
            To deliver high-quality education through innovation, collaboration,
            and dedication — equipping students with both knowledge and strong
            ethical values.
          </p>
        </div>
        <div className="card">
          <h3>🌍 Our Vision</h3>
          <p>
            To be a globally recognized institution that fosters excellence in
            teaching, research, and student development for a better tomorrow.
          </p>
        </div>
      </div>

      {/* Placements */}
      <div className="placements" data-aos="fade-up">
        <h2>Our Placements</h2>
        <p>
          With strong ties to leading multinational companies, our placement
          cell ensures that every student is equipped with the skills and
          confidence needed to succeed.
        </p>

        <div className="stats">
          <div className="stat-box">
            <h3>95%</h3>
            <p>Placement Rate</p>
          </div>
          <div className="stat-box">
            <h3>350+</h3>
            <p>Recruiters</p>
          </div>
          <div className="stat-box">
            <h3>₹12 LPA</h3>
            <p>Highest Package</p>
          </div>
        </div>

        <h3>Top Recruiting Companies</h3>
        <div className="companies">
          <img src={tcs} alt="TCS" />
          <img src={infosys} alt="Infosys" />
          <img src={wipro} alt="Wipro" />
          <img src={cognizant} alt="Cognizant" />
          <img src={accenture} alt="Accenture" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials" data-aos="fade-up">
        <h2>Student Success Stories</h2>
        <div className="testimonial-box">
          <button className="arrow-btn left" onClick={slideBackward}>
            <img src={back_icon} alt="Back" />
          </button>

          <div className="testimonial-content">
            <img
              src={testimonials[index].img}
              alt={testimonials[index].name}
              className="testimonial-img"
            />
            <h3>{testimonials[index].name}</h3>
            <span>{testimonials[index].role}</span>
            <p>“{testimonials[index].quote}”</p>
          </div>

          <button className="arrow-btn right" onClick={slideForward}>
            <img src={next_icon} alt="Next" />
          </button>
        </div>
      </div>

      {/* Placement Coordinators */}
      <div className="placement-coordinators" data-aos="fade-up">
        <h2>Our Placement Coordinators</h2>
        <div className="coordinator-list">
          <div className="coordinator">
            <img src={coordinator1} alt="Coordinator 1" />
            <h4>Mr. Ravi Teja</h4>
            <p>Senior Placement Officer</p>
          </div>
          <div className="coordinator">
            <img src={coordinator2} alt="Coordinator 2" />
            <h4>Ms. Divya Sree</h4>
            <p>Assistant Placement Officer</p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="achievements" data-aos="fade-up">
        <h2>Recent Achievements</h2>
        <ul>
          <li>🏆 Ranked among Top 10 Engineering Institutes in South India</li>
          <li>💡 Students developed 20+ startup ideas under Innovation Lab</li>
          <li>🤝 MoUs with TCS, Infosys, and Accenture for campus hiring</li>
          <li>🎓 95% student satisfaction in teaching and mentorship</li>
        </ul>
      </div>
    </div>
  );
};

export default Explore;
