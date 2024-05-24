import React from 'react'
import Topbanner from '../components/Topbanner'

interface Faq{
    question: string,
    answer: string,
}

const myFaqs: Faq[] = [

    {
        question: 'How much will it cost to study abroad?',
        answer: 'Studying at an international university or school has a wide range of costs. It depends on the nature of your chosen program, the length of your stay, the distance traveled, and the type of lifestyle you desire once you arrive. You should be aware that some student visas require you to have a specific amount of money in your bank account when you arrive in your chosen country'
    },
    {
        question: 'Can I work and study at the same time?',
        answer: 'Working while studying can be a beneficial addition to your academic and living experience. You may be able to work while on an international student visa if you are pursuing a degree-level or higher course. Make sure your visa allows it before starting any paid work. The ability for students to work part-time while pursuing their studies varies by country'
    },
    
]
function page() {
    return (
        <>
            <Topbanner sectionName="FAQ's" />
            <div className='my-10 flex flex-col lg:flex-row gap-8'>
                <div className='w-full md:w-[90%] lg:w-[60%]'></div>
                <div>

                </div>
            </div>
        </>
    )
}

export default page