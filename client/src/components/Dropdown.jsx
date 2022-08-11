import React from 'react';
import { Link } from 'react-router-dom';
// import MenuItems from './MenuItems';

const Dropdown = ({ firstSubmenu, subDir, secondSubmenu, items, dropdown }) => {
    //console.log(items)
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            { items.name === firstSubmenu.id &&
            firstSubmenu.entries.map(( submenu, i) => (
                <li key={i} className='menu-items'>
                    <Link to='/'>{submenu.name}</Link>
                </li>
                ))
            }
            { items.name === secondSubmenu.id &&
            secondSubmenu.entries.map(( submenu, j) => (
                <li key={j} className='menu-items'>
                    <Link to='/'>{submenu.name}</Link>
                </li>
                ))
            }
            {/* { firstSubmenu.name === 'directory-1a' &&
            subDir.map(( submenu, l) => (
                <li key={l} className='menu-items'>
                    <Link to='/'>{submenu.name}</Link>
                </li>
                ))
            } */}
        </ul>
    );
};
export default Dropdown;