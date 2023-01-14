import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import NeastedHeader from './NeastedHeader';
import { navLinks } from '../../NavbarItems';
import './Header.css';
import '../../Assets/Styles/Common.css';



export default function Header() {
    let linksStyle = {
        textDecoration: 'none',
        color: '#3B3B3B',
        letterSpacing: '.024rem'
    }
    const [scroller, initScroller] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                initScroller(false)
            } else {
                initScroller(true)
            }
        };
        window.addEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <header>
                {
                    scroller
                        ?
                        <>
                        <nav className='navbar'>
                            <div></div>
                            <ul className='all-u-l'>
                                {navLinks.map((ele, ind) => <li key={ind}><NavLink style={linksStyle} to={ele.path}>{ele.heading}</NavLink></li>)}
                            </ul>
                        </nav>
                        </>
                        : null
                }
                <NeastedHeader />
            </header>
        </>
    )
}
