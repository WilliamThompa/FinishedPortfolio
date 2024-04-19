import React from 'react' 
import VSCodeThemeLogo from '../assets/vsCodeThemeLogo.png'

function Projects() {
    const projects = [ //An array handling my projects
        {
            id: 1,
            src: VSCodeThemeLogo,
            href1: "https://github.com/WilliamThompa/ThompaTheme",
            href2: "https://marketplace.visualstudio.com/items?itemName=WilliamThompa.thompa",
        }
    ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-indigo-950 via-indigo-950 to-slate-900 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline border-b-4 border-slate-900 text-yellow-400'>Projects</p>
                <p className='py-6 text-xl'>Check out my work below</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                projects.map(({id, src, href1, href2}) => ( //This uses the array previously mentioned and feeds it into specfic parts
                    <div key={id} className=' shadow-yellow-400 shadow-lg rounded-lg'>
                        <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-125 hover:text-yellow-400'><a href={href1} target='_blank' rel='noreferrer'>Repo</a></button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-125 hover:text-yellow-400'><a href={href2} target='_blank' rel='noreferrer'>Marketplace</a></button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Projects