import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';

const MenuItems = ({ items }) => {
    const [dir, setDir] = useState([]);
    const [secondDir, setSecondDir] = useState([]);
    const [subDir, setSubDir] = useState([]);
    const [dropdown, setDropdown] = useState(false);

    const url = '/fs?path=directory-1';
    const secondUrl = '/fs?path=directory-2';
    const subUrl = 'fs?path=directory-1%2Fdirectory-1a';

    useEffect(() => {
        const directory = async () => {
            await fetch(url)
                .then(res => res.json())
                .then(data => setDir(data))
                .catch(err => console.error('error:' + err))
        };
        directory();
    }, [])

    //console.log(dir)

    useEffect(() => {
        const directory = async () => {
            await fetch(secondUrl)
                .then(res => res.json())
                .then(data => setSecondDir(data))
                .catch(err => console.error('error:' + err))
        };
        directory();
    }, [])

    //console.log(secondDir)

    useEffect(() => {
        const directory = async () => {
            await fetch(subUrl)
                .then(res => res.json())
                .then(data => setSubDir(data.entries))
                .catch(err => console.error('error:' + err))
        };
        directory();
    }, [])

    //console.log(subDir)

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
                    </Link>
                    <Dropdown firstSubmenu={dir} secondSubmenu={secondDir}  subDir={subDir} dropdown={dropdown} items={items} />
                </>
            ) : (
                <Link to='/'>{items.name}</Link>
            )}
        </li>
        {/* <li className='menu-items' ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {dir.type === 'directory' && (
            <>
                <Link role='button' to='/' aria-haspopup='menu'
                aria-expanded={dropdown ? 'true' : 'false'} onClick={() => setDropdown((prev) => (!prev))}>
                    {subDir.name}{" "}
                </Link>
            </>
        )}
    </li> */}
    </>
    );
};

export default MenuItems;