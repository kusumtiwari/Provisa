'use client'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
interface AssistanceDiv {
    image: string;
    title: string;
    desc: string;
}


const myAssistanceDiv: AssistanceDiv[] = [
    {
        image: "/images/planeIcon.webp",
        title: "Pre-departure briefing",
        desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
    },
    {
        image: "/images/visaIcon.webp",
        title: "Pre-departure briefing",
        desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
    },
    {
        image: "/images/dollarIcon.webp",
        title: "Pre-departure briefing",
        desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
    },
    {
        image: "/images/serviceIcon.webp",
        title: "Pre-departure briefing",
        desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
    },
    {
        image: "/images/jobIcon.webp",
        title: "Pre-departure briefing",
        desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
    },
    {
        image: "/images/postIcon.webp",
        title: "Pre-departure briefing",
        desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
    },
]

const Services = () => {
    return (
        <div>
            {/* Assist You Div */}
            <h1 className="font-bold text-2xl text-primary-textColor text-center py-2 mt-12">
                We Assist You With
            </h1>
            <div className="bg-red-500 w-[20%] md:w-[10%] lg:w-[4%] h-1 mx-auto mb-10"></div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-16 xl:px-24 mt-16">
                {myAssistanceDiv.map((item: AssistanceDiv, index:any) => (
                    <div
                        key={index}
                        className="rounded-lg bg-gray-100 cursor-pointer text-primary-textColor hover:bg-primary-customRed px-6 py-4 relative min-h-[20vh] mx-4 mb-12 transition-colors duration-800 ease-in-out hover:text-white hover:shadow-md"
                    >
                        <div className="bg-primary-customRed w-16 h-16 rounded-full flex justify-center items-center border-4 border-white absolute left-3 top-[-15%]">
                            <Image
                                src={item.image}
                                alt="icon"
                                width={70}
                                height={70}
                                className="filter invert sepia-1 saturate-5 hue-rotate-180 brightness-90 contrast-100 w-1/2 h-1/2"
                            />
                        </div>
                        <h1 className="font-semibold uppercase text-xl mt-8 mb-4">{item.title}</h1>
                        <p className="truncate-lines mb-6">{item.desc}</p>
                        <p className="mb-4">Learn More</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;