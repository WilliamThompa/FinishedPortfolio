import React, { useState } from 'react' 
import VSCodeThemeLogo from '../assets/VSCodeThemeLogo.png'
import LoaderPage from './LoaderPage'
import Footer from './Footer'

function Projects() {
    const projects = [ //An array handling my projects
        {
            id: 1,
            src: VSCodeThemeLogo,
            href1: "https://github.com/WilliamThompa/ThompaTheme",
            href2: "https://marketplace.visualstudio.com/items?itemName=WilliamThompa.thompa",
            button1: "Repo",
            button2: "Marketplace",
            alt: "My Visual Studio Code Theme Logo"
        },
        {
            id: 2 ,
            src: VSCodeThemeLogo,
            href1: "https://github.com/WilliamThompa/ThompaTheme",
            href2: "https://marketplace.visualstudio.com/items?itemName=WilliamThompa.thompa",
            button1: "Steam",
            button2: "Itch.io",
            alt: "Logo for my game Stickman Equation Evasion"
        },
    ]

    
  return (
    <div>    
        <LoaderPage />
        <div name='projects' className='bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-4'>
                    <p className='text-5xl font-bold inline border-b-4 border-yellow-400 text-yellow-400'>Projects.</p>
                </div>

                <p className='py-5 text-xl'>Check out my work below</p>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    projects.map(({id, src, href1, href2, button1, button2, alt}) => ( //This uses the array previously mentioned and feeds it into specfic parts
                        <div key={id} className=' shadow-yellow-400 shadow-lg rounded-lg'>
                            <img src={src} alt={alt} className='rounded-md duration-200 hover:scale-105' loading='eager'/>
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-125 hover:text-yellow-400'><a href={href1} target='_blank' rel='noreferrer'>{button1}</a></button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-125 hover:text-yellow-400'><a href={href2} target='_blank' rel='noreferrer'>{button2}</a></button>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Projects