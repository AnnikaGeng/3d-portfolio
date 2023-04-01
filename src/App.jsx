import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks,
Hero, Navbar, Tech, Works, StarsCanvas} from "./components"

const App = () => {
  const scrollToTarget = () => {
    const target = document.querySelector('#about');
    target.scrollIntoView({ behavior: 'smooth' });
  };


  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero onClick={scrollToTarget} />
          </div>
        </div>
        <About />
        <Works />
        <Tech />
        <Experience />
        
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </BrowserRouter>
  )
}

export default App
