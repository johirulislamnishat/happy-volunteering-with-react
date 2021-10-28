export const MenuItems = [
    {
        title: 'Home',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: 'Donation',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: 'Events',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: 'Blog',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: 'Register',
        url: '#',
        cName: 'nav-links-mobile'
    },
    {
        title: 'Admin',
        url: '#',
        cName: 'nav-links-mobile'
    }
];



//import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { Component } from 'react';
// import { MenuItems } from './MenuItems';
// import './Navbar.css'

// const menuBar = <FontAwesomeIcon icon={faBars} />
// const times = <FontAwesomeIcon icon={faTimes} />

// class Navbar extends Component {
//     state = { clicked: false }

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked })
//     }



//     render() {
//         return (
//             <div className='navbarItems'>
//                 <nav className='max-w-6xl'>
//                     <h1 className='navbarLogo'>Logo</h1>
//                     <div>
//                         <div className='menuIcon' onClick={this.handleClick}>
//                             <i className={this.state.clicked ? { times } : { menuBar }}></i>

//                         </div>
//                         <ul className='navbarMenu'>
//                             {MenuItems.map((item, index) => {
//                                 return (
//                                     <li key={index}>
//                                         <a className={item.cName} href={item.url}>{item.title}</a>
//                                     </li>
//                                 )
//                             })}

//                         </ul>
//                     </div>
//                 </nav>
//             </div>
//         )
//     }
// }

// export default Navbar;