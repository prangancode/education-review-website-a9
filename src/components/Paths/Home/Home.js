import React, { useEffect, useState } from 'react';
import './Home.css'
import CourseStyling from './CourseStyling';
import InstructorStyling from './InstructorStyling';
import { Link } from 'react-router-dom';


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
            <div className='bg-gray-100 flex justify-center m-12 p-10 rounded-3xl'>
                <div className='flex-col self-center w-1/3'>
                    <h1 className='font-bold text-5xl'>Build Skills With Experts Any Time, Anywhere</h1>
                    <p className='mt-10 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to='/courses'> <button className="bg-white border border-gray-400 font-semibold hover:bg-gray-400 hover:text-white mt-16  px-4 py-2 rounded shadow text-gray-800 w-2/3 ">
                        Start a course
                    </button>
                    </Link>
                </div>
                <div>
                    <img src='https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/banner-img2.png' alt="study" />
                </div>
            </div>
            <div>
                <h1 className='font-bold p-10 text-5xl text-center'>Discover Our Popular Courses</h1>
            </div>
            <div>
                <h1 className="mx-auto text-3xl text-center w-2/3">Smply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
            </div>
            <div className="grid lg:grid-cols-3 p-36 gap-8">
                {
                    courses.map(course => <CourseStyling course={course} key={course.id}></CourseStyling>)
                }
            </div>
            <div>
                <h1 className='font-bold p-10 text-5xl text-center'>Our Skilled Instructors</h1>
            </div>
            <div>
                <h1 className="mx-auto text-3xl text-center w-2/3">Smply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
            </div>
            <div className='grid lg:grid-cols-3 p-36 gap-8'>
                {
                    instructors.map(instructor => <InstructorStyling instructor={instructor} key={instructor.id}></InstructorStyling>)
                }
            </div>
        </div>
    );
};

export default Home;