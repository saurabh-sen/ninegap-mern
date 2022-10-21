import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ login, token }) => {

    
    const logout = () => {
        document.cookie = "jwtoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.reload();
    };

    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <header className="text-gray-600 body-font border-b border-gray-200">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Frontend</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-pink-500 cursor-pointer" to="/">First Link</Link>
                        <Link className="mr-5 hover:text-pink-500 cursor-pointer" to="/">Second Link</Link>
                        <Link className="mr-5 hover:text-pink-500 cursor-pointer" to="/">Third Link</Link>
                        <Link className="mr-5 hover:text-pink-500 cursor-pointer" to="/">Fourth Link</Link>
                    </nav>

                    {/* auth buttons here */}
                    {
                        login ? 
                        <button className="inline-flex items-center bg-pink-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-300 rounded text-base mt-4 md:mt-0 mr-2" onClick={logout} >LogOut
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                        :
                        <>
                        <button className="inline-flex items-center bg-pink-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-300 rounded text-base mt-4 md:mt-0 mr-2" onClick={() => navigate('/login')} >Login
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        
                    </button>
                    <button className="inline-flex items-center bg-pink-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-300 rounded text-base mt-4 md:mt-0" onClick={() => navigate('/signup')}>SignUp
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                        </>
                    }                    
                </div>
            </header>
        </div>
    )
}

export default Navbar