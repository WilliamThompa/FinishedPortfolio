import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => { //Navbar sits in an array
    
    const [nav, setNav] = useState(false) //UseState is used as a switch to determine which icon to display

    const links = [ //Array for navbar
        {id:1, link: 'home'},
        {id:2, link: 'about'},
        {id:3, link: 'portfolio'},
        {id:4, link: 'experience'},
        {id:5, link: 'contact'},
    ]

    return(
    <div className='flex justify-between items-center w-full h-20 px-4 text-yellow-400 bg-gray-900 fixed'>
        <div>
            <h1 className='text-5xl font-logo ml-2'>Thompa</h1> {/*logo*/}
        </div>

        <ul className='hidden md:flex' > {/*Tells the nav bar to hide when below 768px*/}
            {links.map(({id, link}) =>(  //Array in action, used to display nav items
                <li key={id} className='px-4 cursor-pointer font-bold font-nav text-xl hover:scale-125 duration-300 capitalize text-white'>{link}</li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'> {/*Tells the hamburger navbar when to appear*/}
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && ( //Using the useState tells the navbar to appear when the hamburger icon is clicked
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-900 text-white'>
                {links.map(({id, link}) =>(  //Does the exact same thing as before
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{link}</li>
                ))}
            </ul>
    )}
    </div>
  )
}

export default Navbar