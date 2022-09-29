import './App.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className='page-wrapper'>
        <Header/>
        <Hero/>
        <Work/>
        <Skills/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
