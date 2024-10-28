import '../SideBar/SideBarStyle.css'
function SideBar({onClose,isShown}) {

    const myEmail = "henry_qw_blake@outlook.com"
    return (
        <div className={`SideBar_container ${isShown ? 'show' : ''}`}>
            <div className="SideBar">
                <a href="https://www.linkedin.com/in/qihan-wang-5098a62a5" className="LinkedIn"onClose={onClose}>LinkedIn</a>
                <a href="https://github.com/HenryBlake" className="GitHub" onClose={onClose}>GitHub</a>
                <a href={`mailto:${myEmail}`} className="MailLink" onClose={onClose}>Contact Me</a>
            </div>
        </div>

    )
}
export default SideBar