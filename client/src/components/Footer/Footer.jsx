import './Footer.css' 
import gitHubLogo from '../../assets/images/github.png'
import linkedInLogo from '../../assets/images/linkedin.png'
export const Footer = () => {
    return (
        <div id='footer'>
                <p className="text">
                    A movie catalog site developed
                    by Anton Darbokliev using React for the Softuni JS Web course 
                 </p>
            <div className='socialLinks'>
                <a target='_blank' href="https://github.com/AntonDarbokliev">
                    <img src={gitHubLogo} alt="Github" />
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/anton-darbokliev-778054293/">
                    <img src={linkedInLogo} alt="LinkedIn" />
                </a>
            </div> 
        </div>
    )
}