import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../src/Components/NavBar/NavBar";
import Hero from "../src/Components/Hero/Hero";
import Programs from "../src/Components/programs/Programs"
import ProgramCourses from "../src/Components/ProgramCourse/ProgramCourse";
import Title from "../src/Components/Title/Title";
import About from "../src/Components/About/About";
import Campus from "../src/Components/Campus/Campus";
import Testimonials from "../src/Components/Testimonials/Testimonials";
import Contact from "../src/Components/Contact/Contact";
import Footer from "../src/Components/Footer/Footer";
import VideoPlayer from "../src/Components/VideoPlayer/VideoPlayer";
import ApplyPage from "../src/Components/ApplyForm/ApplyForm";
const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Main Home Page */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Hero />
              <div className="container">
                <Title subTitle="OUR PROGRAM" title="What We Offer" />
                <Programs />
                <About setPlayState={setPlayState} />
                <Title subTitle="Gallery" title="Campus Photos" />
                <Campus />
                <Title subTitle="TESTIMONIALS" title="What Student Says" />
                <Testimonials />
                <Title subTitle="CONTACT US" title="Get in Touch" />
                <Contact />
                <Footer />
              </div>
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </>
          }
        />

        {/* Program Courses Page */}
        <Route path="/program/:id" element={<ProgramCourses />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
