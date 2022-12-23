import './App.css'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer';
import { ProfileInfo } from './components/ProfileInfo/ProfileInfo'

function App() {
  return (
    <div className='page'>
      <ProfileInfo />
      <About />
      <Footer 
        twitterUrl='https://www.twitter.com/VitorASV40'
        facebookUrl='https://www.facebook.com/vitorasv'
        instagramUrl='https://www.instagram.com/vitorasv'
        githubUrl='https://vitorvelosodev.github.io'
      />
    </div>
  );
}

export default App
