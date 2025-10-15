import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonials = () => {
     const slider = useRef();
     let slideIndex = 0;
    const slideForward = () => {
        if(slideIndex > -50){ 
            slideIndex -= 25;
        }
        slider.current.style.transform = `translateX(${slideIndex}%)`;
    }
    const slideBackward = () => {
        if(slideIndex < 0){ 
            slideIndex += 25;
        }
        slider.current.style.transform = `translateX(${slideIndex}%)`;
    }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Ritu Chowdary</h3>
                            <span>caraEducations, India</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at caraEducations was one of the best decisions I've ever made. 
                        The supportive community, state-of-the-art facilities, and commitment to academic excellence 
                        have truly exceeded my expectations.
                    </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Pawan Kalyan</h3>
                            <span>caraEducations, India</span>
                        </div>
                    </div>
                    <p>Studying at caraEducations has been a transformative experience. 
                        The professors are not only knowledgeable but also genuinely care about our growth. 
                        The hands-on learning opportunities helped me gain real-world skills that boosted
                         my confidence and career readiness.
                    </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Amy Adams</h3>
                            <span>caraEducations, India</span>
                        </div>
                    </div>
                    <p>caraEducations provides the perfect balance between academics and personal development.
                         The modern campus, innovative teaching methods, and supportive mentors have made my 
                         learning journey both enjoyable and inspiring.
                    </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>caraEducations, India</span>
                        </div>
                    </div>
                    <p>My time at caraEducations has been nothing short of amazing. 
                        The collaborative environment encourages creativity and critical thinking, 
                        while the extracurricular activities helped me discover new passions and build 
                        lifelong friendships.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
};
export default Testimonials;