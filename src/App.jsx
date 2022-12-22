import './App.css'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer';
import { ProfileInfo } from './components/ProfileInfo/ProfileInfo'

function App() {
  return (
    <div className='page'>
      <ProfileInfo />
      <About />
      <Footer />
    </div>
  );
}

export default App
