'use client'

import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { IoIosQuote } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { HiArrowRight, HiArrowNarrowLeft } from "react-icons/hi";


import Services from "./components/Services";

interface HeroImages {
  image: string;
  bannerText: string;
}


interface StudyAbroad {
  image: string;
  title: string;
  desc: string;
}

interface StudentTestimonial {
  image: string;
  name: string;
  testimonial: string;
  uni: string;
}

interface LatestBlogs {
  image: string;
  title: string;
  desc: string;
  date: string;
}

interface TopUnis {
  id: number;
  image: string;
}


const myTopUnis: TopUnis[] = [
  {
    id: 1,
    image: "/images/college5.webp",
  },
  {
    id: 2,
    image: "/images/college2.webp",
  },
  {
    id: 3,
    image: "/images/college3.webp",
  },
  {
    id: 4,
    image: "/images/college4.webp",
  },
  {
    id: 5,
    image: "/images/college5.webp",
  },
  {
    id: 6,
    image: "/images/college3.webp",
  },
  {
    id: 7,
    image: "/images/college2.webp",
  },
  {
    id: 8,
    image: "/images/college3.webp",
  },
  {
    id: 9,
    image: "/images/college4.webp",
  },
]

const myLatestBlogs: LatestBlogs[] = [
  {
    image: "/images/Ways-to-improve.jpg",
    title: "things to do while planning to study abroad",
    desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
    date: "August 20, 2022",
  },
  {
    image: "/images/Ways-to-improve.jpg",
    title: "things to do while planning to study abroad",
    desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
    date: "August 20, 2022",
  },
  {
    image: "/images/Ways-to-improve.jpg",
    title: "things to do while planning to study abroad",
    desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
    date: "August 20, 2022",
  },
]

const myHeroImages: HeroImages[] = [
  {
    image: "/images/heroimg1.webp",
    bannerText: 'Welcome to Professional and Educational Services'
  },
  {
    image: "/images/heroimg3.webp",
    bannerText: 'Welcome to Professional and Educational Services',
  },
  {
    image: "/images/heroimg1.webp",
    bannerText: 'Welcome to Professional and Educational Services',
  },
];

const myStudyAbroad: StudyAbroad[] = [
  {
    image: "/images/australia.webp",
    title: "study in australia",
    desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
  },
  {
    image: "/images/europe.webp",
    title: "study in europe",
    desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
  },
  {
    image: "/images/australia.webp",
    title: "study in japan",
    desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
  },
  {
    image: "/images/canada.webp",
    title: "study in canada",
    desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
  },
  {
    image: "/images/america.webp",
    title: "study in USA",
    desc: "We provide pre-departure orientation, which includes information on flight reservations, airport pick-ups, lodging, insurance, and medical provisions. The students are",
  },
]

const myStudentTestimonial: StudentTestimonial[] = [
  {
    image: "/images/student1.webp",
    name: "John Doe",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuere Lorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuere Lorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuere",
    uni: "The University of Australia"
  },
  {
    image: "/images/student1.webp",
    name: "John Doe",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuere Lorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuereLorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuere",
    uni: "The University of Australia"
  },
  {
    image: "/images/student1.webp",
    name: "John Doe",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuere Lorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuereLorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuere",
    uni: "The University of Australia"
  },
  {
    image: "/images/student1.webp",
    name: "John Doe",
    testimonial: "Lorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuere Lorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuereLorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuereLorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuereLorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuereLorem ipsum dolor sit amet consectetur. Phasellus ut nisl ut velit ultricies. Nunc vel ipsum vitae diam ultricies bibendum. Nunc at dui ut arcu posuere",
    uni: "The University of Australia"
  },
]

const responsive = {
  0: { items: 1 },
  800: { items: 2 },
  1024: { items: 2 },
};
const blogResponsive = {
  0: { items: 1 },
  800: { items: 2 },
  1024: { items: 3 },
}

const Uniresponsive = {
  0: { items: 1 },
  568: { items: 3 },
  800: { items: 4 },
  900: { items: 5 },
  1024: { items: 6 },
};


export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  return (
    <>
      {/* Hero Section  Carousel*/}
      <div className="overflow-hidden">
        <AliceCarousel
          mouseTracking
          autoPlay
          infinite
          autoPlayStrategy="none"
          autoPlayInterval={3000}
          disableDotsControls
          renderPrevButton={() => (
            <div className="flex items-center justify-center bg-white rounded-full absolute top-52 w-12 h-12 z-10">
              <MdArrowBackIosNew className="text-primary-textColor cursor-pointer" />
            </div>
          )}
          renderNextButton={() => (
            <div className="flex items-center justify-center bg-white rounded-full absolute top-52 w-12 h-12 right-0 z-10">
              <MdArrowForwardIos className="text-primary-textColor cursor-pointer" />
            </div>
          )}
          items={myHeroImages.map((item, index) => (
            <div key={index} className="relative h-[80vh] w-full">
              <Image
                src={item.image}
                alt={item.bannerText}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="opacity-60"


              />
              <div className="absolute bottom-[40%] w-fit h-fit bg-black bg-opacity-80 text-white text-center py-10 md:py-16 border-2 md:left-[8%] lg:left-[22%] xl:left-[30%] border-white px-14 md:px-16 font-bold text-2xl flex items-center justify-center">
                {item.bannerText}
              </div>
            </div>
          ))}
        />
      </div>

      {/* Description  */}
      <div className="flex flex-col gap-6 items-center justify-center my-8 w-full mt-12">
        <h1 className="text-primary-textColor font-bold text-2xl uppercase text-center">PROFESSIONAL VISA AND EDUCATION SERVICES</h1>
        <p className="text-primary-textColor line-height w-[80%] text-center">Professional Visa and Education Services Pvt. Ltd. (Pro-Visa) is a professional visa and educational consultancy authorized by the Ministry of Education (MOE) and offering free education to students interested in studying abroad. Our offices are in Kathmandu and Nepalgunj. We have a Learning Center that is fully equipped with ultra-modern facilities and provides students with our best advisors and tutors for Test Preparation Classes in order to provide better service to our students. We are proud of our students who have been successful in their careers as a result of our counseling and guidance, in addition to our high visa success rate. As a result, we may be Nepal's best education consultancy.</p>
      </div>

      <div className="bg-[url('/images/heroimg2.webp')] bg-pink-300 gap-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[25vh] w-full py-16 mt-4">
        <div className="flex flex-col items-center text-white">
          <div>
            <Image
              src={"/images/landicon1.png"}
              alt="Icon"
              width={60} // specify the width
              height={60} // specify the height
              className="filter invert sepia-1 saturate-5 hue-rotate-180 brightness-90 contrast-100 mb-4"
            />
          </div>
          <p className="font-bold text-xl">200+</p>
          <h1>Colleges & Universities</h1>
        </div>

        <div className="flex flex-col items-center text-white">
          <div>
            <Image
              src={"/images/landicon2.png"}
              alt="Icon"
              width={60} // specify the width
              height={60} // specify the height
              className="filter invert sepia-1 saturate-5 hue-rotate-180 brightness-90 contrast-100 mb-4"
            />
          </div>
          <p className="font-bold text-xl">5+</p>
          <h1>Countries</h1>
        </div>

        <div className="flex flex-col items-center text-white">
          <div>
            <Image
              src={"/images/landicon3.png"}
              alt="Icon"
              width={60} // specify the width
              height={60} // specify the height
              className="filter invert sepia-1 saturate-5 hue-rotate-180 brightness-90 contrast-100 mb-4"
            />
          </div>
          <p className="font-bold text-xl">200+</p>
          <h1>Colleges & Universities</h1>
        </div>

        <div className="flex flex-col items-center text-white">
          <div>
            <Image
              src={"/images/landicon4.png"}
              alt="Icon"
              width={60} // specify the width
              height={60} // specify the height
              className="filter invert sepia-1 saturate-5 hue-rotate-180 brightness-90 contrast-100 mb-4"
            />
          </div>
          <p className="font-bold text-xl">250+</p>
          <h1>Courses</h1>
        </div>
      </div>

      {/* Assist You Div  */}
      <Services />
      {/* study abroad  */}
      <h1 className="font-bold text-2xl text-primary-textColor text-center py-2 mt-12">
        Study Abroad
      </h1>
      <div className="bg-red-500 w-[20%] md:w-[10%] lg:w-[4%] h-1 mx-auto mb-16"></div>
      <div className="flex flex-col lg:flex-row gap-6 px-6 sm:px-10 md:px-24 lg:px-32 h-[90vh] text-white" >
        {/* first large item  */}
        <div className={`flex flex-col h-[90vh] w-full lg:w-[42%] hover:bg-yellow-400 hover:opacity-80 bg-cover bg-center`} style={{ backgroundImage: `url(${myStudyAbroad[0].image})` }}>
          <div className="mt-auto mx-6 z-100">
            <div className="w-[55%]">
              <h1 className="font-bold text-xl mb-2 uppercase">{myStudyAbroad[0].title}</h1>
              <div className="bg-white h-0.5 w-100"></div>

            </div>
            <p className="trunkate-one ">{myStudyAbroad[0].desc}</p>
            <button className="px-4 py-2 my-4 rounded bg-blue-500 text-white hover:bg-primary-customRed transition-colors duration-800 ease-in-out">Learn More</button>
          </div>
        </div>

        {/* small grid items  */}
        <div className="grid grid-cols-2 gap-4 md:w-full lg:w-1/2">
          {
            myStudyAbroad.map((item, index) => {
              if (index > 0) {
                return (
                  <div
                    key={index}
                    className="cursor-pointer h-[40vh] my-5 mx-2 bg-center bg-cover px-3 flex items-center justify-center flex-col"
                    style={{ backgroundImage: `url(${item.image})` }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className={`mt-[60%] z-100 w-[75%] ${hoveredIndex === index ? 'opacity-100 transition-opacity duration-500 mt-0' : ''}`}>
                      <h1 className="font-bold text-xl uppercase">{item.title}</h1>
                      <div className="bg-white h-0.5 w-100"></div>
                    </div>
                    <p className={`trunkate-two ${hoveredIndex === index ? 'mt-4 block opacity-100 translate-y-0 transition-opacity duration-800' : 'hidden opacity-0 translate-y-6'}`}>{item.desc}</p>
                    <button className={`px-4 py-2 my-4 rounded bg-blue-500 text-white hover:bg-primary-customRed transition-colors duration-800 ease-in-out ${hoveredIndex === index ? 'block opacity-100 translate-y-0 transition-opacity duration-800' : 'hidden opacity-0 translate-y-6'}`}>Learn More</button>
                  </div>
                );
              }
              return null; // or handle the case when index is 0
            })
          }
        </div>

      </div>

      {/* students testimonial  */}
      <div className="bg-primary-textColor px-6 sm:px-12 md:px-20 xl:px-32 py-8 md:py-16 my-16 md:my-24 relative min-h-[55vh]">
        <h1 className="font-bold text-3xl text-white mb-10 text-center">Student's Testimonials</h1>

        <AliceCarousel
          disableDotsControls
          responsive={responsive}
          mouseTracking
          renderPrevButton={() => (
            <div className="absolute top-52 left-[-10%] md:left-[-8%]">
              <HiArrowNarrowLeft className="text-white cursor-pointer w-10 h-10" />
            </div>
          )}
          renderNextButton={() => (
            <div className="absolute top-52 right-[-10%] md:right-[-8%]">
              <HiArrowRight className="text-white cursor-pointer w-10 h-10" />
            </div>
          )}
        >
          {
            myStudentTestimonial.map((item, index) => {
              return (
                <div
                  key={index}
                  className="px-3 py-3 md:px-6 md:py-6 mx-2 md:mx-4 my-8 box-shadow cursor-pointer hover:scale-105 transition duration-300 ease-in-out bg-transparent rounded border border-gray-400"
                >
                  <IoIosQuote className="text-primary-customRed text-2xl mb-3" />
                  <p className="text-white trunkate-six-p leading-loose md:w-[95%] mb-6">{item.testimonial}</p>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="rounded-full w-12 h-12 md:w-20 md:h-20 overflow-hidden border border-white">
                      <Image
                        src={item.image} // Replace with the correct image source
                        alt='student' // Replace with the correct image alt text
                        width={100}
                        height={100}
                        className="w-full h-full object-center"
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-white text-xl">{item.name}</h1>
                      <p className="text-white">{item.uni}</p>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </AliceCarousel>
      </div>

      {/* inquires form  */}
      <div className="flex items-center flex-col lg:flex-row justify-center gap-6 h-fit lg:h-[95vh] mb-16 w-full">
        <div className="relative w-full lg:w-[50%] h-full">
          <Image
            src="/images/form-banner.webp"
            alt="confused-provisa-nepal"
            layout="fill"
            objectPosition="center"
          />
        </div>
        <form className="px-4 md:px-10 py-8 bg-gray-100 w-full md:w-[90%] lg:w-[30%] h-full" method="POST" >
          <h1 className="font-bold text-primary-textColor text-2xl mb-6">For Your Inquiries</h1>
          {/* Full Name */}
          <div className="flex flex-col mb-5">
            <label className="text-gray-700 font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              className="px-3 py-2 rounded focus:outline-none focus:ring-2 border-none"
              placeholder="Enter Full Name"

            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col mb-5">
            <label className="text-gray-700 font-medium mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="px-3 py-2 rounded focus:outline-none focus:ring-2 border-none text-gray-300 font-light"
              placeholder="Enter Email Address"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col mb-5">
            <label className="text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="px-3 py-2 rounded focus:outline-none focus:ring-2 border-none text-gray-300 font-light"
              placeholder="Enter phone number "
            />
          </div>

          {/* Message */}
          <div className="flex flex-col mb-5">
            <label className="text-gray-700 font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="px-3 py-2 rounded focus:outline-none focus:ring-2 border-none min-h-[25vh]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-4 py-2 bg-orange-600 text-white font-bold rounded hover:bg-primary-textColor focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            Submit
          </button>

        </form>
      </div>

      {/* latest blogs  */}
      <div className="w-100 px-4 md:px-24 lg:px-32">
        <h1 className="font-bold text-2xl text-primary-textColor text-center py-2 mt-12">
          Latest Blogs
        </h1>
        <div className="bg-red-500 w-[20%] md:w-[10%] lg:w-[4%] h-1 mx-auto mb-10"></div>
        <p className="text-primary-textColor font-bold text-right mr-8 mb-4">View All</p>
        <div>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            responsive={blogResponsive}
          >
            {myLatestBlogs.map((item: LatestBlogs, index: any) => (
              <div className="bg-gray-100 md:mx-6 hover:shadow-lg hover:scale-100 transition transform duration-800 ease-in-out cursor-pointer" key={index}>
                <div className="relative w-full h-[270px]">
                  <Image
                    src={item.image}
                    alt="blog"
                    layout="fill"
                    objectPosition="center"
                    className="object-cover"
                  />
                </div>
                <div className="px-3 md:px-4 py-3 md:py-6 pb-10 mb-10">
                  <div className="mb-5 flex justify-between items-center text-gray-500">
                    <div className="flex items-center gap-2">
                      <SlCalender />
                      <p>{item.date}</p>
                    </div>
                    <FaUser />
                  </div>

                  <h1 className="text-xl text-primary-textColor font-bold mb-4">{item.title}</h1>
                  <p className="text-gray-500 trunkate-lines mb-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>

      {/* Top Universities Carousel  */}
      <h1 className="font-bold text-2xl text-primary-textColor text-center py-2 mt-8">
        Latest Blogs
      </h1>
      <div className="bg-red-500 w-[20%] md:w-[10%] lg:w-[4%] h-1 mx-auto mb-8"></div>
      <div className="w-full min-h-[30vh] px-4 md:px-20 lg:px-32 required relative flex items-center justify-center">
        <AliceCarousel
          mouseTracking
          disableDotsControls
          responsive={Uniresponsive}
          renderPrevButton={() => (
            <div className="absolute top-0 left-[-2%]">
              <HiArrowNarrowLeft className="text-primary-textColor cursor-pointer w-10 h-10" />
            </div>
          )}
          renderNextButton={() => (
            <div className="absolute top-0 right-[-2%]">
              <HiArrowRight className="text-primary-textColor cursor-pointer w-10 h-10 font-light" />
            </div>
          )}
          items={myTopUnis.map((item, index) => (
            <div className="mx-4 flex justify-center items-center mt-auto">
              <Image
                src={item.image}
                alt={`uni- ${index}`}
                width={100}
                height={100}
                objectFit="cover"
                objectPosition="center"
                className="" />
            </div>
          ))}

        />
      </div>
    </>
  );
}
