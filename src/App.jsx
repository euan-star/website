import { useState } from 'react'
import './App.css'
import About from './about.jsx'
import Header from './Header.jsx'
import Aurora from './Aurora';
import Contact from './Contact.jsx';
import MusicButton from './MusicButton.jsx';

function App() {

  return (
    <>
   <div className="top-aurora">
        <Aurora
          colorStops={["#5A4FFF", "#FFB4C0", "#FF7A7A"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <MusicButton />
      <div>
        Euan
      </div>
      <Header />
      <hr />
      <About />
      <hr />
      <Contact />
      <hr />
      <p id='para'>Made with lots of 💜 and ☕ by euan</p>
      <p id='Sub'>&copy;{new Date().getFullYear()} @euanwya</p>
      <div className="bottom-aurora">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>


    </>
  )
}

export default App
