import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import SubDropdown from './SubDropdown';

const Dropdown = ({ items, dropdown, setDropdown, depthLevel }) => {
    //console.log(items)

    const [dir, setDir] = useState([]);
    const [secondDir, setSecondDir] = useState([]);
    
    const url = '/fs?path=directory-1';
    const secondUrl = '/fs?path=directory-2';
   

    useEffect(() => {
        const directory = async () => {
            await fetch(url)
                .then(res => res.json())
                .then(data => setDir(data.entries))
                .catch(err => console.error('error:' + err))
        };
        directory();
    }, [])

    //console.log(dir)

    useEffect(() => {
        const directory = async () => {
            await fetch(secondUrl)
                .then(res => res.json())
                .then(data => setSecondDir(data.entries))
                .catch(err => console.error('error:' + err))
        };
        directory();
    }, [])

    //console.log(secondDir)


   depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            <li className='menu-items'>
            { items.name === "directory-1" && 
                <>
                {dir.map(( submenu, j) => (
                    <Link role="button" to='/' aria-haspopup='menu'
                    aria-expanded={dropdown ? 'true' : 'false'} onClick={() => setDropdown((prev) => (!prev))} key={j}>
                        {submenu.name}
                        <span>&raquo;</span>
                        </Link>
                ))}
                <SubDropdown dropdown={dropdown} dir={dir}/>
                </>
            }
            { items.name === "directory-2" &&
            secondDir.map(( submenu, j) => (
                <MenuItems items={submenu} key={j} />
                ))
            }
            </li>
        </ul>
    );
};
export default Dropdown;