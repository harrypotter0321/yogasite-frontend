import React, { useRef } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import Yogalogo from '../images/Yogalogo.png'


function Navbar({ admin }) {
    const navigate = useNavigate()
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header className='nav-header'>
            <div className='nav-logo'>
               <Link to='/' ><img src={Yogalogo} alt="" /> </Link> 
            </div>


            <div >
                {
                    admin ? (
                        ''

                    ) : (
                        <nav ref={navRef}>
                            <Link to='/'>Home</Link>

                            <a ><Menu menuButton={<MenuButton>Achivements</MenuButton>}>
                                <MenuItem> <Link className='achivement-link' to='/myachievements'> My Achivements</Link></MenuItem>
                                <MenuItem> <Link className='achivement-link' to="/studentachievements"> Students Achivements</Link></MenuItem>
                            </Menu></a>

                            <Link to='/classes'>Classes</Link>
                            <Link to='/contactus' >Contact</Link>

                            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                                <FaTimes />
                            </button>
                        </nav>
                    )
                }

                <button className='nav-btn' onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>

        </header>
    )
}

export default Navbar