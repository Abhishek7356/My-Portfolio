import { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  const [lightMode, setLightMode] = useState(false);
  console.log(lightMode);
  return (
    <div>
      <Header setLightMode={setLightMode} lightMode={lightMode} />
      <Home lightMode={lightMode} />
      <About lightMode={lightMode} />
      <Skills lightMode={lightMode} />
      <Work lightMode={lightMode} />
      <Contact lightMode={lightMode} />
    </div>
  );
}

export default App;
