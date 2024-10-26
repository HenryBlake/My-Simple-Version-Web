import '../SideBar/SideBarStyle.css'
function SideBar() {

    const myEmail="henry_qw_blake@outlook.com"
    return (
        <div className='SideBar_container'>
            <div className="SideBar">
                <p className="LinkedIn"><a href="https://www.linkedin.com/in/qihan-wang-5098a62a5">LinkedIn</a></p>
                <a href="https://github.com/HenryBlake" className="GitHub">GitHub</a>
                <a href={`mailto:${myEmail}`} className="MailLink">Contact Me</a>
            </div>
        </div>

    )
}
export default SideBar