import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import './App.css'
import Footer from "./components/Footer/Footer.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Project from "./components/Project/Project.tsx";
import Background from "./components/Background/Background.tsx";
import Cursor from "./components/Cursor/Cursor";

export default function App() {
  return (
     <div className="relative pt-20">
     <Cursor/>
     <Background/>
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Services/>
     <Project/>
     <Contact></Contact>
     <Footer/>
      
   
    </div>
  );
}
