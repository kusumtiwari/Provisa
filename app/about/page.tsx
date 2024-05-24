import React from 'react'
import Topbanner from '../components/Topbanner'
import Image from 'next/image'
import Link from 'next/link'


interface AboutContents {
    name: string,
    tableName: string;
    id: number;

}

const myAboutContents: AboutContents[] = [
    {
        name: "About Us",
        tableName: "about",
        id: 1,

    },
    {
        name: "Messege From M.D",
        tableName: "messege-from-md",
        id: 2,

    },
    {
        name: "Our Team",
        tableName: "our-team",
        id: 3,

    },
    {
        name: "Universities",
        tableName: "universities",
        id: 4,

    },
    {
        name: "Testimonials",
        tableName: "testimonials",
        id: 5,

    },
]


function page() {
    return (
        <>
            <Topbanner sectionName='About' />
            <div className='mt-10 my-8 flex flex-col md:flex-row gap-6 justify-center w-100 px-6 md:px-12 lg:px-20 xl:px-32'>
                <div className='bg-gray-100 px-6 py-8 w-full md:w-[25%] h-fit sticky top-20'>
                    <h1 className='text-2xl font-bold mb-4 text-primary-textColor'>About Us</h1>
                    {myAboutContents.map((item, index) => (
                        <div key={index} className='w-full mb-4'>
                            <Link href='/about/2' className=' cursor-pointer text-gray-500 hover:text-primary-textColor hover:translate-x-2 transition-transform'>{item.name}</Link>
                        </div>
                    ))}
                </div>

                <div className='w-full md:w-[75%]'>
                    <div className='bg-primary-customRed h-[0.8vh] w-12 my-5'>  </div>
                    <h1 className='text-primary-textColor text-2xl font-bold mb-5'>Who We Are</h1>
                    <p className='text-gray-500 mb-6 line-height'>
                        Professional Visa and Education Services Pvt. Ltd. (Pro-Visa) is the Best #1 Education Consultancy in Nepal, authorized from ministry of education (MOE) and free education providing proper guidance to students planning for international study. We are running gracefully since 2009; facilitating students by providing students actual information with the full support in documentation process and language skills. We counsel students  by analyzing their academic profile and advising them the best suitable option best matched to their own career aspiration.

                        Currently, PRO-VISA, #1 Education Consultancy in Nepal is recruiting students from Nepal to Australia, USA, UK, China, Japan, Germany, France, Hungary, Finland, India, China, and Bangladesh for higher study and providing different language classes for student which benefits students for easy communication and maintain a bond with different countries. We are also bringing foreign students to Nepal for medical study and are also planning for student exchange programs in the near future. We are planning to provide Nepali language classes to foreign students to make it easy for them to communicate in Nepal by helping them understand Nepali culture and civilization
                    </p>
                    <div className='relative h-[75vh] w-full'>
                        <Image
                            src="/images/aboutimg.webp"
                            alt="aboutimg"
                            layout="fill"
                            objectPosition='center'
                            objectFit='cover' />
                    </div>

                    <div className='flex gap-4 flex-col md:flex-row w-full my-4 mt-10 mb-8'>
                        <div className='px-4 py-6 flex items-center justify-center font-bold text-2xl  w-[35%] h-[18vh] text-white bg-primary-textColor'>Our Mission</div>
                        <p className='line-height text-gray-500 md:w-[80%]'>Our mission is to make students choose the best education destination for them to help them become professional experts in the future. Many students from Nepal are in search of an ideal education provider abroad, for their higher study. Lack of proper guidance is limiting them to meet their expectations.
                            PRO-VISA is here to guide them honest, up-to date and right information to help students walk on right track for their bright future of success. Since its initiation PRO-VISA has been committing to develop quality human resource with high academic and moral standard by recommending them to top-class Colleges and Universities abroad, so that they can become the leaders of tomorrow with a wider vision for the goodwill of the country.</p>
                    </div>

                    <div className='flex gap-4 flex-col md:flex-row w-full my-4'>
                        <div className='px-4 py-6 flex items-center justify-center font-bold w-[35%] h-[18vh] text-2xl text-white bg-primary-textColor'>Our Vision</div>
                        <p className='line-height text-gray-500 md:w-[80%]'>Our mission is to make students choose the best education destination for them to help them become professional experts in the future. Many students from Nepal are in search of an ideal education provider abroad, for their higher study. Lack of proper guidance is limiting them to meet their expectations.
                            PRO-VISA is here to guide them honest, up-to date and right information to help students walk on right track for their bright future of success. Since its initiation PRO-VISA has been committing to develop quality human resource with high academic and moral standard by recommending them to top-class Colleges and Universities abroad, so that they can become the leaders of tomorrow with a wider vision for the goodwill of the country.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page