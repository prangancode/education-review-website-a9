import React, { useEffect, useState } from 'react';
import './Home.css'
import CourseStyling from './CourseStyling';
import InstructorStyling from './InstructorStyling';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';


const Home = () => {
    const [courses, setCourses] = useState([]);
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    useEffect(() => {
        fetch('./instructors.JSON')
            .then(res => res.json())
            .then(data => setInstructors(data));
    })

    return (

        <div>

            <div className='bg-gray-100 flex justify-center px-10 '>

                <div className='flex-col self-center w-1/3 px-12 m-5'>
                    <Zoom top cascade>
                        <h1 className='font-bold text-5xl'>Build Skills With Experts Any Time, Anywhere</h1>
                    </Zoom>
                    <Flash>
                        <p className='mt-10 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Flash>
                    <Link to='/courses'> <button className="bg-white border border-gray-400 font-semibold hover:bg-indigo-400 hover:text-white mt-16  px-4 py-2 rounded shadow text-gray-800 w-2/3 ">
                        Start a course
                    </button>
                    </Link>
                </div>

                <div className="px-12 m-5">
                    <img src='https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/banner-img2.png' alt="study" />
                </div>
            </div>

            <div>
                <h1 className='font-bold p-10 text-5xl text-center'>This is Future Learning</h1>
            </div>
            <div>
                <h1 className="mx-auto text-2xl text-center italic w-2/3">Learn 100% online with world class universities and industry experts. Develop hobbies, new skills and career-changing expertise with our flexible courses.</h1>
            </div>
            <div className="grid lg:grid-cols-3 px-36 py-16 gap-12">
                {
                    courses.map(course => <CourseStyling course={course} key={course.id}></CourseStyling>)
                }
            </div>
            <div>
                <h1 className='font-bold p-10 text-5xl text-center'>Our Skilled Instructors</h1>
            </div>
            <div>
                <h1 className="mx-auto text-2xl text-center italic w-2/3">Smply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
            </div>
            <div className='grid lg:grid-cols-3 px-36 py-16 gap-12'>
                {
                    instructors.map(instructor => <InstructorStyling instructor={instructor} key={instructor.id}></InstructorStyling>)
                }
            </div>
        </div>
    );
};

export default Home;