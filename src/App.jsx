 import './App.css'
import CodeAwakening from './components/FJob'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MentorInMe from './components/Mentor'
import PortfolioStory from './components/MyFolio'
import PandemicChapter from './components/Pandemic'
import PassportPause from './components/Pause'
import Epilogue from './components/Waiting'

function App() {
 
  return (
    <>
  <Hero/>
  <PandemicChapter/>
  <PassportPause/>
  <CodeAwakening/>
  <MentorInMe/>
  <Epilogue/>
  <Footer/>
    </>
  )
}

export default App
