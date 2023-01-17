import React from 'react';
import NavBar from './NavBar';
import '../style/style.scss';

const Layout = (props) => {
    return (
        <div className='layout'>
            <NavBar />
            <div className='content'>
                {props.children}
            </div>
            <footer className='czytamy_bo_kochamy-footer'>
                <p>CopyRight 2023 DCNetowrking</p>
            </footer>
        </div>
    );
}

export default Layout;
