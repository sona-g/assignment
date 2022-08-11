import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(()=> {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        }
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return() => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }
    }, [dropdown])

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true)
    };
    
    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false)
    };

    return (
        <>
        <li className='menu-items' ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {items.type === 'directory' ? (
                <>
                    <Link role='button' to='/' aria-haspopup='menu'
                    aria-expanded={dropdown ? 'true' : 'false'} onClick={() => setDropdown((prev) => (!prev))}>
                        {items.name}{" "}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </Link>
                    <Dropdown dropdown={dropdown} items={items} ref={ref} 
                    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} setDropdown={setDropdown}/>
                </>
            ) : (
                <Link to='/'>{items.name}</Link>
            )}
        </li>
    </>
    );
};

export default MenuItems;