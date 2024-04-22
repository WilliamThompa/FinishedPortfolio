import React from 'react'

function Contact(){
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-blue-950 via-blue-950 to-indigo-950 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-4'>
                <p className='text-5xl font-bold inline border-b-4 border-yellow-400 text-yellow-400'>Contact.</p>
            </div>

            <p className='py-5 text-xl'>Submit the form below to message me</p>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/ebpdxrxb' method='POST' className='flex flex-col w-full md:w-1/2' target='_blank'> {/* Form that handles all contact requests */}
                    <input type='text' name='name' placeholder='Who Are You?' className='p-2 bg-transparent border-2 border-yellow-400 rounded-md text-white focus:outline-none' required/> {/* Name input field set to required */}
                    <input type='text' name='email' placeholder='What is your Email?' className='my-4 p-2 bg-transparent border-2 border-yellow-400 rounded-md text-white focus:outline-none' required/> {/* Email input field set to required */}
                    <textarea name='message' rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 border-yellow-400 rounded-md focus:outline-none' required/> {/* Message input field set to required */}
                    <button className='text-slate-900 bg-yellow-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button> 
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact