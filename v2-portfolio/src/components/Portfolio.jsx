import React from 'react' 
import VSCodeThemeLogo from './assets/VSCodeThemeLogo'

function Portfolio() {
  return (
    <div name='portfolio' className='bg-gradient-to-b from-indigo-950 via-indigo-950 to-slate-900'>
        <div>
            <div>
                <p>Portfolio</p>
                <p>Check out some of my work right here</p>

                <div>

                </div>

                <div>
                    <img src='{VSCodeTheme}' alt='' />
                    <div>
                        <button>Repo</button>
                        <button>VS Code</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio