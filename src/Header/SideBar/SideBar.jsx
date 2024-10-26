import '../SideBar/SideBarStyle.css'
function SideBar() {

    const myEmail="henry_qw_blake@outlook.com"
    return (
        <div className='SideBar_container'>
            <div className="SideBar">
                <p className="LinkedIn"><a href="https://www.linkedin.com/in/qihan-wang-5098a62a5">LinkedIn</a></p>
                <p className="GitHub"><a href="https://github.com/HenryBlake">GitHub</a></p>
                <a href={`mailto:${myEmail}`}>Contact Me</a>
            </div>
        </div>

    )
}
export default SideBar