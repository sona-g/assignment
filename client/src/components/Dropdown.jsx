import React from 'react';
import { Link } from 'react-router-dom';
// import MenuItems from './MenuItems';

const Dropdown = ({ firstSubmenu, subDir, secondSubmenu, items, dropdown }) => {
    console.log(items)
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            { items.name === 'directory-1' &&
            firstSubmenu.map(( submenu, i) => (
                <li key={i} className='menu-items'>
                    <Link to='/'>{submenu.name}</Link>
                </li>
                ))
            }
            { items.name === 'directory-2' &&
            secondSubmenu.map(( submenu, i) => (
                <li key={i} className='menu-items'>
                    <Link to='/'>{submenu.name}</Link>
                </li>
                ))
            }
            { firstSubmenu.name === 'directory-1a' &&
            subDir.map(( submenu, i) => (
                <li key={i} className='menu-items'>
                    <Link to='/'>{submenu.name}</Link>
                </li>
                ))
            }
        </ul>
    );
};
export default Dropdown;