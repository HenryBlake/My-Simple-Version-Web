import "../Header/HeaderStyle.css"
import SideBar from "./SideBar/SideBar"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
function Header() {
    const [isShown, ShowSidebar] = useState(false)

    const toggleSidebar = () => {
        ShowSidebar(prev => !prev)
    }
    return (
        <header>
            <div className="BigScreen">
                <p className="Title">Henry(Qihan) <span style={{ color: 'red' }}>Wang</span></p>
                <a href="https://www.linkedin.com/in/qihan-wang-5098a62a5" className="LinkedIn">LinkedIn</a>
                <a href="https://github.com/HenryBlake" className="GitHub">GitHub</a>
                <button id="contact_me_btn">Contact Me</button>
            </div>
            <div className="MobileLayout">
                <p className="Title">Henry(Qihan) <span style={{ color: 'red' }}>Wang</span></p>
                <div className="MenuBtn" onClick={toggleSidebar}>
                    <MenuIcon />
                </div>
            </div>
            {/* {isShown && <SideBar onClose={toggleSidebar} isShown={isShown}/>} */}
            <SideBar isShown={isShown} onClose={toggleSidebar} />

        </header>
    )
}
export default Header