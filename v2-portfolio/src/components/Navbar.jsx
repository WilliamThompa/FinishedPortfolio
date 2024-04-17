import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    
    const links = [
        {id:1, link: 'home'},
        {id:2, link: 'about'},
        {id:3, link: 'portfolio'},
        {id:4, link: 'experience'},
        {id:5, link: 'contact'},
    ]

    return(
    <div className='flex justify-between items-center w-full h-20 px-4 text-retrobrown bg-peachyellow fixed'>
        <div>
            <h1 className='text-5xl font-logo ml-2'>Thompa</h1>
        </div>
        <ul className='flex'>
            <li className='px-4 cursor-pointer text-giantsorange font-bold font-nav text-2xl hover:scale-150 duration-300 capitalize'>Home</li>
            <li className='px-4'>Home</li>
        </ul>
    </div>
  )
}

export default Navbar