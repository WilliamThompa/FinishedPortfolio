import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

function SocialLinks() {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-yellow-400 ml-[-100px]'>
                <a href='' className='flex justify-between items-center w-full text-slate-900 text-lg font-bold'>LinkedIn <FaLinkedin size={40}/> </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks