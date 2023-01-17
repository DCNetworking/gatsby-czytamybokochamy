import { Link } from 'gatsby';
import { NavBarItems } from '../data/NavBarItems';
import React from 'react';

const NavBar = () => {
    return (
        <nav className='czytamy_bo_kochamy-navbar'>
            {NavBarItems.map(item =>
                <Link id={item.id} key={item.key} to={item.linkTo}>{item.name}</Link>
            )}
        </nav>
    );
}

export default NavBar;
