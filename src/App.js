import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import SkillsNav from './components/SkillsNav';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <header className='header'>
        <Navigation />
        <Home />
        <About />
        <SkillsNav />
        <Skills />
        <Contacts />
        
      </header>
    </div>
  );
}

export default App;
