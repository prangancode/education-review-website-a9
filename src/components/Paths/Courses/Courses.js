import React, { useEffect, useState } from 'react';
import AllcoursesStyling from './AllcoursesStyling';

const Courses = () => {
    const [allcourses, setAllcourses] = useState([]);
    useEffect(() => {
        fetch('./allcourses.JSON')
            .then(res => res.json())
            .then(data => setAllcourses(data));

    }, [])
    return (
        <div>
            <div>
                <h1 className="text-center text-5xl p-10 font-bold text-blue-500">Courses</h1>
            </div>
            <div>
                <p className="text-xl text-center w-3/4 mx-auto">All our courses are self-paced and have been designed by subject matter experts, to give you an interactive and enriched learning experience.</p>
            </div>
            <div className="grid lg:grid-cols-4 p-24 gap-8">
                {
                    allcourses.map(course => <AllcoursesStyling
                        key={course.id}
                        course={course}
                    ></AllcoursesStyling>)
                }

            </div>
        </div>
    );
};

export default Courses;