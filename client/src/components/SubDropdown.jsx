import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const SubDropdown = ({ dropdown, dir }) => {
    const [subDir, setSubDir] = useState([]);
    const subUrl = 'fs?path=directory-1%2Fdirectory-1a';

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

    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            <li className='menu-items'>
            {subDir.map(( submenu, l) => (
                    <Link role="button" to='/' key={l}>{submenu.name}</Link>
                ))
            }
            </li>
       </ul>
    );
};

export default SubDropdown;