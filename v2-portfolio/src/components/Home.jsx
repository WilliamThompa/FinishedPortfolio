import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import Image from '../assets/walter.jpg'
import { TbArrowRightCircle } from "react-icons/tb"

function Home() {
    const [text] = useTypewriter({
        words: ['Student', 'Developer', 'Designer'],
        loop: {},
        typeSpeed: 150,
    });
  
    return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white pb-2 pr-16'> Hi I'm William</h2>
                <h2 className='text-4xl sm:text-7xl font-bold text-yellow-400'>
                    I'm a <span>{text}</span>
                    <Cursor />
                </h2>
                <p className='text-white py-4 max-w-md'>I've been studying a bachelor's degree in Information Technology.
                    I have 2 and a half years experience, I like working with React, Tailwind and C#.   
                </p>
                <div>
                    <button className='group text-slate-900 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-yellow-400 font-bold'>
                        Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <TbArrowRightCircle size={20} className='ml-1'/> {/*Arrow Icon*/}
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={Image} alt="Photograph of Me" className='rounded-2xl mx-10 w-2/3 md:w-full'/> {/*Image*/}
            </div>
        </div>
    </div>
  )
}

export default Home