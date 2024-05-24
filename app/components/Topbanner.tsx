import React from 'react'

interface TopbannerProps {
    sectionName: string;
}


const Topbanner: React.FC<TopbannerProps> = ({ sectionName }) => {
    return (
        <div className="bg-[url('/images/banner.webp')] h-[25vh] w-full bg-center bg-cover px-6 md:px-20 lg:px-36 pt-12">
            <h1 className='text-3xl font-bold text-white ml-6'>{sectionName}</h1>
        </div>
    

    );
};


export default Topbanner;