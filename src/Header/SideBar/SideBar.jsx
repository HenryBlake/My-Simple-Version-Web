import '../SideBar/SideBarStyle.css'
import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
function SideBar({ isShown }) {
    const myEmail = "henry_qw_blake@outlook.com"
    const nodeRef = useRef(null)
    return (
        <CSSTransition in={isShown} classNames={"dropdwon-menu"} nodeRef={nodeRef} appear={isShown} timeout={200} exit={!isShown} unmountOnExit>
            <div className="Sidebar" ref={nodeRef}>
                <a href="https://www.linkedin.com/in/qihan-wang-5098a62a5" className="LinkedIn">LinkedIn</a>
                <a href="https://github.com/HenryBlake" className="GitHub">GitHub</a>
                <a href={`mailto:${myEmail}`} className="MailLink">Contact Me</a>
            </div>
        </CSSTransition>


    )
}
export default SideBar