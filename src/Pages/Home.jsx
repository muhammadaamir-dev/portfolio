import Hero from "../Pages/Hero.jsx";
import About from '../Pages/About.jsx';
import Skills from "../Pages/Skills.jsx";
import HowIWorkWithTeams from "../Pages/HowIWorkWithTeams.jsx";
import Experience from "../Pages/Experience.jsx";
import FAQSection from "../Pages/FAQSection.jsx";
import ContactSection from "../Pages/ContactSection.jsx";
import Whattsapp from "./Whattsapp.jsx";

const Home = () => {
  return (
    <div>

      <Hero />
      <About />
      <Skills />
      <HowIWorkWithTeams />
      <Experience />
      <FAQSection />
      <ContactSection />
      <Whattsapp/>
    </div>
  )
}

export default Home;
