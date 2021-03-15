import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (
        <div className="navbar">
            <div class="container flex flex-row mx-auto my-5">
                <img className="logo" class="h-8" src={process.env.PUBLIC_URL + '/images/walkie-logo.png'}/>
                <div class="flex-grow" />
                <Link class="text-gray-500 hover:text-gray-900 px-5">Features</Link>
                <Link class="text-gray-500 hover:text-gray-900 px-5">Roadmap</Link>
                <Link class="text-gray-500 hover:text-gray-900 px-5">Contact</Link>
            </div>   
        </div>
    )
}

export default NavBar;