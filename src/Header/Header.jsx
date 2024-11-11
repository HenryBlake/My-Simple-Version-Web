import Dropdown from "./Dropdown/Dropdown"
import MenuIcon from '@mui/icons-material/Menu';
import '../Header/HeaderStyle.css'
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
function Header() {
    const [isShown, ShowSidebar] = useState(false)
    const myEmail = "henry_qw_blake@outlook.com"
    const toggleSidebar = () => {
        ShowSidebar(prev => !prev)
    }
    return (
        <header>
            <div className="BigScreen">
                <p className="Title">Henry(Qihan) <span style={{ color: 'red' }}>Wang</span></p>
                <a href="https://www.linkedin.com/in/qihan-wang-5098a62a5" className="LinkedIn">LinkedIn</a>
                <a href="https://github.com/HenryBlake" className="GitHub">GitHub</a>
                <button id="contact_me_btn" ><a href={`mailto:${myEmail}`}>Contact Me</a></button>
            </div>
            <div className="MobileLayout">
                <p className="Title">Henry(Qihan) <span style={{ color: 'red' }}>Wang</span></p>
                <div className="MenuBtn" onClick={toggleSidebar}>
                    <MenuIcon/>
                </div>
            </div>
            <Dropdown isShown={isShown}/>
        </header>
    )
}
export default Header