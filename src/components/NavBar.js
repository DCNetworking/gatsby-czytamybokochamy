import { Link } from 'gatsby';
import { NavBarItems } from '../data/NavBarItems';
import React from 'react';

const NavBar = () => {
    return (
        <nav className='czytamy_bo_kochamy-navbar'>
            <div className="czytamy_bo_kochamy-logo">Czytamy Bo kochamy</div>
            <div className='czytamy_bo_kochamy-nav_items'>
                {NavBarItems.map(item =>
                    <Link id={item.id} key={item.key} to={item.linkTo}>{item.name}</Link>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
