import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';
import Modal from './Modal';

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        }
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
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
            <li className='menu-items' ref={ref}
                onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

                {items.type === 'directory' ? (
                    <>
                        <Link role='button' to='/' aria-haspopup='menu'
                            aria-expanded={dropdown ? 'true' : 'false'} onClick={() => setDropdown((prev) => (!prev))}>
                            {items.name}{" "}
                            <span className="arrow" />
                        </Link>
                        <Dropdown dropdown={dropdown} items={items} setDropdown={setDropdown} depthLevel={depthLevel} />
                    </>
                ) 
                : (
                        items.name === 'index.js' ? (
                            <>
                                <Link role='button' to='/' onClick={() => setShowModal(!showModal)}>{items.name}</Link>
                                {!showModal && (
                                    <Modal showModal={showModal} setShowModal={setShowModal} />
                                )}
                            </>
                        
                        ) 
                        : (
                            <Link to='/'>{items.name}</Link>
                        )
                )
                }
            </li>
        </>
    );
};

export default MenuItems;