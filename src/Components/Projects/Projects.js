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
import Project2 from "../../Images/project2.png";
import Project3 from "../../Images/project3.png";
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
              <img src={Project1} alt="U Tracker" />
              <h3>U Tracker</h3>
              <p>
                An application to track your all data from one place. I
                developed the website and the mobile app.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <img src={Project2} alt="Green CTG" />
              <h3>Green CTG</h3>
              <p>
                An app to help people to get an overview of how they can make
                the city beautiful.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <img src={Project3} alt="Coin Tracker" />
              <h3>Coin Tracker</h3>
              <p>
                Using this app you can track any e coin. Also you will get a
                good advise about investment from the professional.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <img src={Project3} alt="Coin Tracker" />
              <h3>Coin Tracker</h3>
              <p>
                Using this app you can track any e coin. Also you will get a
                good advise about investment from the professional.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
