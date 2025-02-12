import './App.css';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Intro from './Components/Intro/Intro.jsx';
import Navbar from './Components/Header/Header.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Skills from './Components/Skills/Skills.jsx';
import About from './Components/About/About.jsx';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;