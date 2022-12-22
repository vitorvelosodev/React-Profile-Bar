import twitter from './../../assets/Twitter-Icon.png'
import facebook from './../../assets/Facebook-Icon.png'
import instagram from './../../assets/instagram-Icon.png'
import github from './../../assets/Github-Icon.png'
import './Footer.css'

export function Footer() {
    return (
        <footer>
            <img src={twitter} alt="Twitter logo" />
            <img src={facebook} alt="Twitter logo" />
            <img src={instagram} alt="Twitter logo" />
            <img src={github} alt="Twitter logo" />
        </footer>
    )
}