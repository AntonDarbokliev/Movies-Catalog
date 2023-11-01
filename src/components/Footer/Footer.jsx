import './Footer.css' 
import gitHubLogo from '../../assets/images/github.png'
import linkedInLogo from '../../assets/images/linkedin.png'
export const Footer = () => {
    return (
        <footer>
            <div>
                <p className="text">
                    A movie catalog site developed
                    by Anton Darbokliev using React for the Softuni JS Web course 
                 </p>
            </div> 
            <div className='socialLinks'>
                <a href="https://github.com/AntonDarbokliev">
                    <img src={gitHubLogo} alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/anton-darbokliev-778054293/">
                    <img src={linkedInLogo} alt="LinkedIn" />
                </a>
            </div> 
        </footer>
    )
}