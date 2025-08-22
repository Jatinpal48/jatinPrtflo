
import AboutMeMain from './components/AboutMeSection/AboutMeMain'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'
import HelperSection from './components/HelperSection'
import SkillsMain from './components/SkillsSection/SkillsMain'
import SubSkills from './components/SkillsSection/SubSkills'
import ExperianceMain from './components/ExperianceSection/ExperianceMain'
import ProjectMain from './components/projectSection/ProjectMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'

function App() {

  return (
    <main className='font-body'>
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillsMain/>
      <SubSkills/>
      <ExperianceMain/> 
      <ProjectMain/>
      <ContactMeMain/>
      <FooterMain/>
      {/* <HelperSection/> */}
    </main>
  )
}

export default App
