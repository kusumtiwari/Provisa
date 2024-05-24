'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { RiFacebookFill, RiMailOpenFill } from "react-icons/ri";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";

import Link from 'next/link';

function Navbar() {
    const [menuClicked, setMenuClicked] = useState(false);
    const [aboutUsOpen, setAboutUsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [abroadStudyOpen, setAbroadStudyOpen] = useState(false);
    const [testPrepOpen, setTestPrepOpen] = useState(false);

    const onMenuClick = () => {
        setMenuClicked(!menuClicked);
    }

    return (
        <>
            {/* topmost bar  */}
            <div className="hidden md:flex justify-around items-center bg-primary-customRed text-white h-10 text-sm font-mulish">
                {/* social media icons  */}
                <div className="flex gap-4">
                    <RiFacebookFill />
                    <div className="border-l border-gray-400" ></div>
                    <FaInstagram />
                    <div className="border-l border-gray-400" ></div>
                    <FaTwitter />
                    <div className="border-l border-gray-400" ></div>
                    <FaYoutube />
                </div>

                {/* call section  */}
                <div className="flex gap-1 items-center">
                    <IoCall />
                    <p>+9779851101782</p>
                </div>

                {/* mail section  */}
                <div className="flex gap-1 items-center">
                    <RiMailOpenFill />
                    <p>admin@provisa.com.np</p>
                </div>

                {/* location */}
                <div className="hidden lg:flex gap-1 items-center">
                    <IoLocationSharp />
                    <p> Laxmi Plaza, Putalisadak, Padmodaya Mode, Kathmandu, Nepal</p>
                </div>
            </div>

            {/* second bar  */}
            <div className='flex justify-between px-6 sm:px-12 md:px-20 lg:px-32 xl:px-36 items-center flex-col sm:flex-row'>
                <div >
                    <Image src="/images/provisa.png" alt="logo" width={200} height={50} />
                </div>
                <div className="flex my-4 flex-1 md:justify-end">
                    <div className='flex justify-center items-center mr-2 sm:mr-12 md:mr-20'>
                        <IoCall className='text-gray-500 h-8 w-8' />
                        <div>
                            <p className='text-gray-600 text-xs'>Speak with us</p>
                            <h1 className='text-primary-customRed font-bold'>+9779851101782</h1>
                        </div>
                    </div>
                    <button className='bg-primary-customRed text-white px-2 py-3 rounded'>
                        Book an Appointment
                    </button>
                </div>

            </div>
            <hr className='w-[85%] h-[1.5px] bg-red-500 mx-auto'></hr>

            {/* main navbar  */}
            <div className='md:hidden w-100 flex justify-center items-center my-2 cursor-pointer sticky top-0 z-100'>
                <CgMenuRight className='h-10 w-10' onClick={onMenuClick} />
            </div>
            <div className={`hidden md:flex gap-2 lg:gap-6 justify-around items-center text-primary-textColor px-6 sm:px-12 md:px-8 lg:px-32 xl:px-40 my-4`}>
                <Link href="/" className="hover:text-red-500">Home</Link>
                <div className="relative">
                    <button onMouseOver={() => {
                        setAboutUsOpen(!aboutUsOpen)
                        setServicesOpen(false);
                        setAbroadStudyOpen(false)
                        setTestPrepOpen(false)
                    }

                    } className="hover:text-red-500 transition 0.5s ease-in-out flex items-center">
                        <Link href='/about'>About Us</Link>
                        <MdKeyboardArrowDown className='h-6 w-6' />
                    </button>
                    {aboutUsOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                            <Link href="/about/team" className="block px-4 py-2 hover:bg-primary-textColor hover:text-white">Who we are</Link>
                            <Link href="/about/history" className="block px-4 py-2 hover:bg-primary-textColor hover:text-white">Message From M.D</Link>
                            <Link href="/about/history" className="block px-4 py-2 hover:bg-primary-textColor hover:text-white">Our Team</Link>
                            <Link href="/about/history" className="block px-4 py-2 hover:bg-primary-textColor hover:text-white">Universities</Link>
                            <Link href="/about/history" className="block px-4 py-2 hover:bg-primary-textColor hover:text-white">Testimonials</Link>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button onMouseOver={() => {
                        setServicesOpen(!servicesOpen)
                        setAbroadStudyOpen(false);
                        setTestPrepOpen(false)
                        setAboutUsOpen(false)
                    }
                    } className="hover:text-red-500 flex items-center">
                        <Link href='/services'> Our Services</Link>
                        <span>
                            <MdKeyboardArrowDown className='h-6 w-6' />
                        </span>
                    </button>
                    {servicesOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                            <Link href="/services/consulting" className="block px-4 py-2 hover:bg-gray-200">Consulting</Link>
                            <Link href="/services/training" className="block px-4 py-2 hover:bg-gray-200">Training</Link>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button onMouseEnter={() => {
                        setAbroadStudyOpen(!abroadStudyOpen);
                        setServicesOpen(false);
                        setTestPrepOpen(false)
                        setAboutUsOpen(false)
                    }}
                        className="hover:text-red-500 flex items-center">
                        Abroad Study
                        <MdKeyboardArrowDown className='h-6 w-6' />
                    </button>
                    {abroadStudyOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                            <Link href="/abroad/usa" className="block px-4 py-2 hover:bg-gray-200">USA</Link>
                            <Link href="/abroad/uk" className="block px-4 py-2 hover:bg-gray-200">UK</Link>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button onMouseEnter={() => {
                        setTestPrepOpen(!testPrepOpen);
                        setServicesOpen(false);
                        setAboutUsOpen(false);
                        setAbroadStudyOpen(false);
                    }}
                        className="hover:text-red-500 flex items-center">
                        Test Preparations
                        <MdKeyboardArrowDown className='h-6 w-6' />
                    </button>
                    {testPrepOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                            <Link href="/abroad/usa" className="block px-4 py-2 hover:bg-gray-200">USA</Link>
                            <Link href="/abroad/uk" className="block px-4 py-2 hover:bg-gray-200">UK</Link>
                        </div>
                    )}
                </div>
                <Link href="/blogs" className="hover:text-red-500">Blogs</Link>
                <Link href="/faqs" className="hover:text-red-500">FAQ'S</Link>
                <Link href="/contact" className="hover:text-red-500">Contact Us</Link>
            </div>
        </>
    )
}

export default Navbar