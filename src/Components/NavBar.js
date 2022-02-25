import React from 'react'
import Logo from '../Logo.png'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='flex border items-center pl-12 py-5 space-x-8'>
            <img src={Logo} alt=""
                className='w-[50px] md:w-[60px]'></img>
            <Link to="/" className='text-xl md:text-3xl text-blue-400 font-bold'>Movies</Link>
            <Link to="/favourites" className='text-xl md:text-3xl text-blue-400 font-bold'>Favourites</Link>
        </div>
    )
}

export default NavBar