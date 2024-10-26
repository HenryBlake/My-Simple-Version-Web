import "../Header/HeaderStyle.css"
import SideBar from "./SideBar/SideBar"
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
    return (
        <header>
            <div className="BigScreen">
                <p className="Title">Henry(Qihan) <span style={{ color: 'red' }}>Wang</span></p>
                <p className="LinkedIn"><a href="https://www.linkedin.com/in/qihan-wang-5098a62a5">LinkedIn</a></p>
                <p className="GitHub"><a href="https://github.com/HenryBlake">GitHub</a></p>
                <button id="contact_me_btn">Contact Me</button>
            </div>
            <div className="MobileLayout">
                <p className="Title">Henry(Qihan) <span style={{ color: 'red' }}>Wang</span></p>
                <div className="MenuBtn">
                    <MenuIcon />
                </div>
            </div>
            <SideBar />
        </header>
    )
}
export default Header