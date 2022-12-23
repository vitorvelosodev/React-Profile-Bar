import { Button } from '../Button/Button';
import './ProfileInfo.css'
import mailIcon from '../../assets/mail.png'
import linkedinIcon from '../../assets/linkedin.png'

export function ProfileInfo() {
    return (
        <div className='profile'>
            <img className="profile-pic" src="https://avatars.githubusercontent.com/u/45744031?v=4" alt="Profile Picture" />
            <h1>Vitor Veloso</h1>
            <h2>Front-end Developer</h2>
            <h4>github.io/vitorvelosodev</h4>
            <div className='buttons'>
                <Button 
                    bg='#FFFFFF'
                    icon={mailIcon}
                    fontColor='#black'
                    url='mailto:vitorvelosodev@gmail.com'>
                        Email
                </Button>
                <Button
                    bg='#5093E2'
                    icon={linkedinIcon}
                    fontColor='#FFFFFF'
                    url='https://www.linkedin.com/in/vitorasv'>
                        LinkedIn
                </Button>
            </div>
        </div>
    );
}