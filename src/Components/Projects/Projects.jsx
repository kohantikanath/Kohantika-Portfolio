import Project1 from "/public/project1.png";
import Project3 from "/public/project3.jpg";
import Project4 from "/public/project4.png";
import Project5 from "/public/project5.jpg";
import Project6 from "/public/project6.png";
import Project7 from "/public/project7.png";
import Project8 from "/public/project8.png";
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
          spaceBetween={200}
          slidesPerView={2}
          grabCursor={true}
          className="slider"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
          modules={[Autoplay]}
          // breakpoints={{
          //   480: {
          //     spaceBetween: 150, // Change this value as needed
          //     slidesPerView: 2, // Optionally change the number of slides per view for smaller screens
          //   },
          // }}
        >
          <SwiperSlide>
            <div className="project-card">
              <a
                href="https://github.com/kohantikanath/Mario-Game"
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://food-product-explorer-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Project7} alt="Food Product Explorer" />
                <h3>Food Product Explorer</h3>
                <p>
                  My Food Product Explorer is a web app that helps users
                  discover and compare food products based on ingredients,
                  nutrition, pricing, and reviews. With intuitive search and
                  filters, it offers a seamless and informed browsing experience
                  for health-conscious eaters, budget shoppers, and food
                  enthusiasts.
                </p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <a
                href="https://github.com/kohantikanath/Kohantika-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://quiz-arcade-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Project4} alt="Quiz Arcade App" />
                <h3>Quiz Arcade App</h3>
                <p>
                  My Quiz Arcade app is a fun and interactive platform offering
                  a variety of quizzes across different categories. With
                  engaging questions, real-time scoring, and a user-friendly
                  interface, it provides an exciting way to test knowledge and
                  challenge friends. Perfect for learning and entertainment!
                </p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <a
                href="https://github.com/kohantikanath/MERN_AI-CHATBOT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Project5} alt="MERN-AI-CHATBOT" />
                <h3>MERN-AI-CHATBOT</h3>
                <p>
                  My MERN-AI-Chatbot is an advanced AI-powered chatbot built
                  with the MERN stack, designed for seamless and secure
                  conversations. It supports message storage, retrieval, and
                  deletion, with robust security features like JWT
                  authentication, HTTP-only cookies, password encryption, and
                  middleware chains. Ideal for smart and secure AI interactions!
                </p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <a
                href="https://github.com/kohantikanath/MyntraHackathon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Project6} alt="HackerRamp-2024(SwipeSavy)" />
                <h3>HackerRamp-2024(SwipeSavy)</h3>
                <p>
                  My HackerRamp Myntra Project is a React Native app designed
                  for an interactive and engaging fashion experience. It
                  features smooth navigation, swipeable fashion recommendations,
                  and a dynamic UI with components like ThemeCard and
                  SwipeableCard. Built for seamless user interaction, it
                  enhances fashion discovery with an intuitive and visually
                  appealing interface.
                </p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <a
                href="https://github.com/kohantikanath/TodoListApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Project3} alt="TodoList APP" />
                <h3>TodoList APP</h3>
                <p>
                  My React Native To-Do List App is a simple yet efficient task
                  management tool designed for seamless productivity. It allows
                  users to add, edit, and delete tasks with a clean and
                  intuitive UI. With real-time updates and smooth navigation, it
                  helps users stay organized and manage their daily tasks
                  effortlessly.
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
