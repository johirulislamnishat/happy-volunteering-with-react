import { faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div>
            <div className='max-w-6xl mx-auto navbarItems'>
                <div>
                    <h1>Logo</h1>
                </div>

                <div>
                    <nav>
                        <ul className='navbarMenu'>
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink className={item.cName} to={item.url}>{item.title}</NavLink>
                                    </li>
                                )
                            })}

                        </ul>
                    </nav>
                    {/* <div onClick={handleClick}>
                        {
                            click ? <FontAwesomeIcon className='text-white' icon={faHamburger} /> : <FontAwesomeIcon icon={faTimes} />
                        }
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;