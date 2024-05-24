import React from 'react'
import Topbanner from '../components/Topbanner'

function page() {
    return (
        <>
            <Topbanner sectionName='Contact Us' />
            <div className='my-10 flex flex-col justify-center items-center w-full'>
                <h1 className='text-center font-bold text-2xl text-primary-textColor mb-6'>Get In Touch</h1>
                <p className='text-center my-6 md:w-[85%] lg:w-[70%] mb-10'>Let’s Get Together! We’re here to quickly provide you with the info and services you need & answer any questions you may have.</p>
                <form className='md:w-[85%] lg:w-[75%] xl:w-[60%]'>
                    <div className='lg:flex w-full justify-between'>
                        <div className='flex flex-col lg:w-[47%] '>
                            <label htmlFor='firstName' className='text-primary-textColor mb-2'>
                                First Name <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='text'
                                id='firstName'
                                name='firstName'
                                className='border border-gray-300 rounded-md py-2 px-3 mb-4'
                                required
                            />
                        </div>
                        <div className='flex flex-col lg:w-[47%]'>
                            <label htmlFor='email' className='text-primary-textColor mb-2'>
                                Email <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                className='border border-gray-300 rounded-md py-2 px-3 mb-4'
                                required
                            />
                        </div>
                    </div>
                    <div className='lg:flex w-full justify-between'>
                        <div className='flex flex-col lg:w-[47%]'>
                            <label htmlFor='mobileNumber' className='text-primary-textColor mb-2'>
                                Mobile Number
                            </label>
                            <input
                                type='text'
                                id='mobileNumber'
                                name='mobileNumber'
                                className='border border-gray-300 rounded-md py-2 px-3 mb-4'

                            />
                        </div>
                        <div className='flex flex-col lg:w-[47%]'>
                            <label htmlFor='address' className='text-primary-textColor mb-2'>
                                Address <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='text'
                                id='address'
                                name='address'
                                className='border border-gray-300 rounded-md py-2 px-3 mb-4'
                                required
                            />
                        </div>
                    </div>

                    <div className='flex flex-col w-full mt-6 mb-10'>
                        <label htmlFor='subject' className='text-primary-textColor mb-2'>
                            Subject
                        </label>
                        <input
                            type='text'
                            id='subject'
                            name='subject'
                            className='border border-gray-300 rounded-md py-2 px-3 mb-4 w-full'
                        />

                        <label htmlFor='message' className='text-primary-textColor mb-2'>
                            Message
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            className='border border-gray-300 rounded-md py-2 px-3 mb-4 w-full h-32'
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className='bg-primary-customRed text-white py-2 px-4 rounded-md mt-20 lg:mt-0 w-full lg:w-auto hover:bg-primary-textColor transition duration-800 ease-in-out'
                    >
                        Submit
                    </button>
                </form >
            </div >
        </>
    )
}

export default page