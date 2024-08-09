import React,{useRef} from 'react'

import {FaUser, FaBook ,FaHome, FaList, FaTags, FaStore, FaTimes} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";



const Navbar = () => {

    const navRef=useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("login-form")
    }
    return (
        <div>
            <header className='header'>
                <div className='header_one'>
                    <a href='\#' className='logo'><FaBook />Ducbook</a>
                    
                
                <div className="icons">
                    
                    <a href="/#"><FaCartShopping /></a>
                    
                    <div id="login-btn" className='user-btn' onClick={showNavbar}><FaUser /></div>
                </div>


                </div>
               

            </header>
            <div className="bottom-navbar">
                <a href="/#"><FaHome /></a>                
                <a href="/#"><FaList /></a>
                <a href="/#"><FaTags /></a>
                <a href="/#"><FaStore /></a>
            </div>
            <div className="login-form-container" ref={navRef}> 
                <div id="close-login-btn" onClick={showNavbar}><FaTimes /></div>
                <form action="#">
                    <h3>sign in</h3>
                    <span>email</span>
                <input type="email" className='box' placeholder='enter your email'/>
                <span>password</span>
                <input type="password" className='box' placeholder='enter your password'/>

                <div className='check-box'>
                    <input type='checkbox' id='remember-me?'/>
                    <label htmlFor=''>remember-me?</label>

                </div>

                <input type='submit' value="sign-in" className='btn'/>
                <p>forgot password? <a href='\#'>click here!</a></p>
                <p>dont have an account? <a href='\#'>create</a></p>

                </form>
            </div>
        </div>
    )
}

export default Navbar