import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content text-white bg-slate-700 mt-3 p-2 shadow rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li tabIndex="0">
                            <Link to='/' className="justify-between">
                                More
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link to='/blogs'>Blogs</Link></li>
                                <li><Link to='/about'>About</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link to='/' className='text-xl md:text-3xl text-white'>Fresh Spice</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li tabIndex="0">
                        <Link to=''>
                            Inventory
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2 text-white">
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/'>Products</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/login'>Login</NavLink>
            </div>
        </div>
    );
};

export default Header;