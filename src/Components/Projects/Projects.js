// import Project1 from "../../Images/project1.png";
// import Project2 from "../../Images/project2.png";
// import Project3 from "../../Images/project3.png";
// import "./Projects.css";

// function Projects() {
//   return (
//     <div className="projects" id="projects">
//       <div className="projects-header">
//         <h1>Projects</h1>
//       </div>
//       <div className="project-grid">
//         <div className="project-card">
//           <img src={Project1} alt="U Tracker" />
//           <h3>U Tracker</h3>
//           <p>
//             An application to track your all data from one place. I developed
//             the website and the mobile app.
//           </p>
//         </div>
//         <div className="project-card">
//           <img src={Project2} alt="Green CTG" />
//           <h3>Green CTG</h3>
//           <p>
//             An app to help people to get an overview of how they can make the
//             city beautiful.
//           </p>
//         </div>
//         <div className="project-card">
//           <img src={Project3} alt="Coin Tracker" />
//           <h3>Coin Tracker</h3>
//           <p>
//             Using this app you can track any e coin. Also you will get a good
//             advise about investment from the professional.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;
import Project1 from "../../Images/project1.png";
import Project3 from "../../Images/project3.png";
import Project4 from "../../Images/project4.png";
import Project5 from "../../Images/project5.png";
import Project6 from "../../Images/project6.png";
import Project7 from "../../Images/project7.jpg";
import Project8 from "../../Images/project8.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./Projects.css";
import "swiper/css";
import "swiper/css/autoplay";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects-header">
        <h1>Projects</h1>
      </div>
      <div className="project-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          grabCursor={true}
          className="slider"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="project-card">
              <a
                href="https://github.com/kohantikanath/Mario-Game"
                target="_blank"
              >
                <img src={Project1} alt="Mario Game" />
                <h3>Mario Game</h3>
                <p>
                  Managed the development of The Mario Game Project, a
                  browser-based platformer with smooth gameplay inspired by
                  Super Mario. Implemented responsive player controls using
                  keyboard inputs for enhanced user interaction and experience.
                </p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <a
                href="https://github.com/kohantikanath/rocketium-nodejs-project"
                target="_blank"
              >
                <img src={Project7} alt="Node.js E-commerce API" />
                <h3>Node.js E-commerce API</h3>
                <p>
                  Developed a Node.js API with Express, featuring data serving,
                  filtering, and sorting capabilities to demonstrate backend
                  functionality and API design principles. Implemented automated
                  data fetching scripts and environment variable configuration
                  for enhanced operational efficiency.
                </p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <a
                href="https://github.com/kohantikanath/Kohantika-Portfolio"
                target="_blank"
              >
                <img src={Project8} alt="Portfolio" />
                <h3>Portfolio</h3>
                <p>
                  Developed a React application with a variety of interactive
                  features, making the app engaging and easy to navigate.
                  Integrated smooth, eye-catching animations to enhance visual
                  appeal and improve user interaction. Designed a sleek and
                  contemporary user interface that enhances usability and
                  provides a polished look.
                </p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <a
                href="https://github.com/kohantikanath/Quiz_App"
                target="_blank"
              >
                <img src={Project4} alt="Quiz App" />
                <h3>Quiz App</h3>
                <p>
                  Developed a dynamic web quiz with randomized questions and
                  timed challenges for engaging user experiences. Implemented
                  progress tracking, instant scoring, and an interactive
                  frontend with JavaScript, HTML, and CSS for seamless
                  usability.
                </p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <a
                href="https://github.com/kohantikanath/Vehicle_Service_Management_Backend_Project"
                target="_blank"
              >
                <img src={Project5} alt="Vehicle Service Management" />
                <h3>Vehicle Service Management</h3>
                <p>
                  Developed a backend system using MySQL and SpringBoot,
                  incorporating intelligent database management features for
                  efficient handling of vehicle service records and customer
                  data. Implemented CRUD operations for comprehensive patient
                  detail handling
                </p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <a href="https://github.com/kohantikanath/ProductService" target="_blank">
                <img src={Project6} alt="Product Management System" />
                <h3>Product Management System</h3>
                <p>
                  Engineered a robust backend system integrating with the Fake
                  Store API for efficient product data management. Designed
                  RESTful APIs using Spring Boot and Spring MVC to enhance
                  inventory management and service efficiency with comprehensive
                  CRUD functionalities.
                </p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <a
                href="https://github.com/kohantikanath/ImageEditor/tree/main/imageEditor"
                target="_blank"
              >
                <img src={Project3} alt="Image Editor" />
                <h3>Image Editor</h3>
                <p>
                  Developed a Java-based image editor application with essential
                  editing functionalities for users. Implemented features such
                  as image cropping, grayscale conversion, and rotation to
                  enhance editing capabilities.
                </p>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
