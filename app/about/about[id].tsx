import { useRouter } from 'next/router';
import Topbanner from '../components/Topbanner';
import Link from 'next/link';

const myAboutContents = [
    { name: "About Us", tableName: "about", id: 1 },
    { name: "Messege From M.D", tableName: "messege-from-md", id: 2, },
    { name: "Our Team", tableName: "our-team", id: 3 },
    { name: "Universities", tableName: "universities", },
    { name: "Testimonials", tableName: "testimonials", id: 5, },
];

function AboutDetailsPage() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>hi
            {/* <Topbanner sectionName={`About`} />
            <div className='mt-10 my-8 flex flex-col md:flex-row gap-6 justify-center w-100 px-6 md:px-12 lg:px-20 xl:px-32'>
                <div className='bg-gray-100 px-6 py-8 w-full md:w-[25%] h-fit sticky top-20'>
                    <h1 className='text-2xl font-bold mb-4 text-primary-textColor'>About Us</h1>
                    {myAboutContents.map((item, index) => (
                        <div key={index} className='w-full mb-4'>
                            <Link href={item.id === 1 ? `/about` : `/about/${item.id}`} className=' cursor-pointer text-gray-500 hover:text-primary-textColor hover:translate-x-2 transition-transform'>{item.name}</Link>
                        </div>
                    ))}
                </div>

                <div className='w-full md:w-[75%]'>
                    {id}
                </div> */}
            {/* </div> */}hi
        </>
    )
}

export default AboutDetailsPage;