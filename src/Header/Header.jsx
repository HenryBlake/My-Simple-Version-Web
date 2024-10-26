import "../Header/HeaderStyle.css"
import SideBar from "./SideBar/SideBarStyle"
function Header() {
    return (
        <header>
            <div className="BigScreen">
                <p className="Title">Henry(Qihan) <span style={{color:'red'}}>Wang</span></p>
                <p className="LinkedIn">LinkedIn</p>
                <p className="GitHub">GitHub</p>
                <button id="contact_me_btn">Contact Me</button>
            </div>
            <div className="MobileLayout">
                <p className="Title">Henry(Qihan) <span style={{color:'red'}}>Wang</span></p>
                <SideBar/>
            </div>
        </header>
    )
}
export default Header