import twitter from './../../assets/Twitter-Icon.png'
import facebook from './../../assets/Facebook-Icon.png'
import instagram from './../../assets/Instagram-Icon.png'
import github from './../../assets/GitHub-Icon.png'
import './Footer.css'

export function Footer(props) {
    return (
        <footer>
            <a className='link-element' href={props.twitterUrl}><img src={twitter} alt="Twitter logo" /></a>
            <a className='link-element' href={props.facebookUrl}><img src={facebook} alt="Facebook logo" /></a>
            <a className='link-element' href={props.instagramUrl}><img src={instagram} alt="Instagram logo" /></a>
            <a className='link-element' href={props.githubUrl}><img src={github} alt="Github logo" /></a>
        </footer>
    )
}