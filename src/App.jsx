import './App.scss'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <div className='page-container'>
        {/* <Header/> */}
        <Hero/>
        <Projects/>
        <Skills/>
        <Contact/>
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default App
