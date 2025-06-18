import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import './App.css'
import Footer from "./components/Footer/Footer.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project.tsx";

export default function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
     <About/>
    <Skills/>
    <Project/>
    <Contact></Contact>
    <Footer/>
     
 
    </div>
  );
}
