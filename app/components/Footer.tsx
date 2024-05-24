import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IoCall, IoLocationSharp, } from "react-icons/io5";
import { RiFacebookFill, RiMailOpenFill } from "react-icons/ri";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
function Footer() {
    return (
        <div className='bg-primary-textColor px-6 md:px-20 lg:px-24 xl:px-24 py-8 md:py-16 mt-8 text-white'>
            <div className='flex justify-between gap-6 flex-col lg:flex-row'>
                <div className='flex lg:justify-center gap-6 lg:gap-4 flex-col md:flex-row lg:w-1/2'>
                    <div className='w-full md:w-1/2'>
                        <Image
                            src='/images/Footerlogo.png'
                            alt='footer-logo'
                            width={200}
                            height={200}
                            className='filter brightness-0 invert ' />
                        <p className='mt-3 truncate-lines w-3/4'>Dont just take our word for it, come see us and let us show you that you have come to the right place.</p>
                    </div>
                    <div className='flex flex-col gap-4 text-white my-8 md:mt-0'>
                        <div>
                            <h1 className='font-bold text-lg'>Quick Links</h1>
                            <div className='w-[30%] h-0.5 bg-white'></div>
                        </div>
                        <Link href='/about' className='hover:translate-x-2 transition-transform'>About</Link>
                        <Link href='/ourteam' className='hover:translate-x-2 transition-transform'>Out Team</Link>
                        <Link href='/contact' className='hover:translate-x-2 transition-transform'>Contact Us</Link>
                        <Link href='/faq' className='hover:translate-x-2 transition-transform'>Faq</Link>
                        <Link href='/blogs' className='hover:translate-x-2 transition-transform'>Blogs</Link>
                    </div>

                </div>

                <div className='flex justify-center gap-4 flex-col md:flex-row w-full lg:w-1/2'>
                    <div className='flex flex-col gap-4 text-white w-full md:w-1/2 my-8 md:my-0'>
                        <div>
                            <h1 className='font-bold text-lg'>Test Preparations</h1>
                            <div className='w-[10%] h-0.5 bg-white'></div>
                        </div>
                        <Link href='/about' className='hover:translate-x-2 transition-transform'>IELTS</Link>
                        <Link href='/ourteam' className='hover:translate-x-2 transition-transform'>PTE</Link>
                        <Link href='/contact' className='hover:translate-x-2 transition-transform'>Japenese Language</Link>

                    </div>

                    <div className='flex flex-col gap-4 text-white w-full md:w-1/2'>
                        <div>
                            <h1 className='font-bold text-lg'>Contact</h1>
                            <div className='w-[10%] h-0.5 bg-white'></div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <IoLocationSharp className='w-8 h-8' />
                            <p className=''>Laxmi Plaza, Putalisadak, Padmodaya Mode, Kathmandu, Nepal</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <IoCall />
                            <p className=''>+9779851101782
                                ,
                                01-4531819</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <RiMailOpenFill />
                            <p className=''>admin@provisa.com.np</p>
                        </div>
                        <div className='w-[90%] h-0.5 bg-gray-100 text-primary-textColor'> </div>
                        <div className='flex gap-2'>
                            <div className='bg-white flex items-center justify-center w-6 h-6'>
                                <RiFacebookFill className='w-4 h-4 text-primary-textColor' />
                            </div>
                            <div className='bg-white flex items-center justify-center w-6 h-6'>
                                <FaInstagram className='w-4 h-4 text-primary-textColor' />
                            </div>
                            <div className='bg-white flex items-center justify-center w-6 h-6'>
                                <FaTwitter className='w-4 h-4 text-primary-textColor' />
                            </div>
                            <div className='bg-white flex items-center justify-center w-6 h-6'>
                                <FaYoutube className='w-4 h-4 text-primary-textColor' />
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <div className='w-[98%] mx-auto mt-8 md:mt-10 h-[0.1vh] bg-gray-100'></div>
            <p className='text-center text-sm mt-10'>Copyright © 2024, Professional Visa and Education Services Pvt. Ltd. | All right reserved.</p>
        </div>
    )
}

export default Footer