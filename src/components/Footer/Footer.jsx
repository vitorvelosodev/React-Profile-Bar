import twitter from './../../assets/Twitter-Icon.png'
import facebook from './../../assets/Facebook-Icon.png'
import instagram from './../../assets/Instagram-Icon.png'
import github from './../../assets/GitHub-Icon.png'
import './Footer.css'

export function Footer() {
    return (
        <footer>
            <img src={twitter} alt="Twitter logo" />
            <img src={facebook} alt="Facebook logo" />
            <img src={instagram} alt="Instagram logo" />
            <img src={github} alt="Github logo" />
        </footer>
    )
}