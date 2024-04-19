import React from 'react' 
import VSCodeThemeLogo from '../assets/vsCodeThemeLogo.png'

function Portfolio() {
  return (
    <div name='portfolio' className='bg-gradient-to-b from-indigo-950 via-indigo-950 to-slate-900 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline border-b-4 border-slate-900 text-yellow-400'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div className='shadow-md shadow-yellow-400 rounded-lg'>
                    <img src={VSCodeThemeLogo} alt='' className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 haver:scale-105'>Repo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 haver:scale-105'>VS Code</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio