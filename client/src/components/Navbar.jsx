import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import MenuItems from "./MenuItems";

const Navbar = () => {
    const [menu, setMenu] = useState([]);
    const url = '/fs?path=root';

    useEffect(() => {
        const root = async () => {
            await fetch(url)
            .then(res => res.json())
            .then(data => setMenu(data.entries))
            .catch(err => console.error('error:' + err))
          };
          root();
    }, [])

    console.log(menu)

    return (
        <div className='nav-area'>
        <Link to='/' className='logo'>LOGO</Link>
            <ul className='menus'>
            {menu.map((main) => (
                <MenuItems items={main} key={main.type} />
            ))}
            </ul>
        </div>
    );
};

export default Navbar;