import React, { useContext } from 'react';
import Logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
const Navbar = () => {
    const { user, SignOut } = useContext(AuthContext);

    const handleLogOut = () => {
        SignOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className='max-w-[1150px] mx-auto'>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/" className="text-xl font-semibold mr-5">Home</NavLink>
                            <NavLink to="/allFood" className="text-xl font-semibold mr-5">All Food Items</NavLink>
                            <NavLink to="/blog" className="text-xl font-semibold mr-5">Blog</NavLink>
                             {
                            user?.email ?
                                <div className="">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user?.email && user.photoURL} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 z-[1] space-y-2 p-5 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mx-auto">
                                            <li>
                                                <a className="justify-between">
                                                    {user?.email && user.displayName}

                                                </a>
                                            </li>
                                            <li><a>
                                                <NavLink to="/myAddedItem">My Added Food</NavLink>
                                            </a></li>
                                            <li><a>
                                                <NavLink to="/addItem">Add New Item</NavLink>
                                            </a></li>
                                            <li><a>
                                                <NavLink to="/OrderedFood">My Ordered Food</NavLink>
                                            </a></li>
                                            <li onClick={handleLogOut}><a>Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                                :


                                <NavLink to="/login" className="text-xl font-semibold mr-5">Login</NavLink>
                        }
                        </ul>
                    </div>
                    <NavLink>
                        <img src={Logo}></img></NavLink>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/" className="text-xl font-semibold mr-5">Home</NavLink>
                        <NavLink to="/allFood" className="text-xl font-semibold mr-5">All Food Items</NavLink>
                        <NavLink to="/blog" className="text-xl font-semibold mr-5">Blog</NavLink>
                        {
                            user?.email ?
                                <div className="">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user?.email && user.photoURL} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 z-[1] space-y-2 p-5 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                            <li>
                                                <a className="justify-between">
                                                    {user?.email && user.displayName}

                                                </a>
                                            </li>
                                            <li><a>
                                                <NavLink to="/myAddedItem">My Added Food</NavLink>
                                            </a></li>
                                            <li><a>
                                                <NavLink to="/addItem">Add New Item</NavLink>
                                            </a></li>
                                            <li><a>
                                                <NavLink to="/OrderedFood">My Ordered Food</NavLink>
                                            </a></li>
                                            <li onClick={handleLogOut}><a>Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                                :


                                <NavLink to="/login" className="text-xl font-semibold mr-5">Login</NavLink>
                        }

                    </ul>
                </div>

            </div>
        </div>

    );
};

export default Navbar;