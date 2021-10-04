import React, { useEffect, useState } from 'react';
import AllInstructorsStyling from './AllInstructorsStyling';

const Instructors = () => {
    const [allinstructors, setAllinstructors] = useState([]);
    useEffect(() => {
        fetch('./allinstructors.JSON')
            .then(res => res.json())
            .then(data => setAllinstructors(data));

    }, [])
    return (
        <div>
            <div>
                <h1 className="text-center text-5xl p-10 font-bold">Instructors</h1>
            </div>
            <div>
                <p className="text-xl text-center w-3/4 mx-auto">All our courses are self-paced and have been designed by subject matter experts, to give you an interactive and enriched learning experience.</p>
            </div>
            <div className="grid lg:grid-cols-3 p-36 gap-8">
                {
                    allinstructors.map(instructor => <AllInstructorsStyling
                        key={instructor.id}
                        instructor={instructor}
                    ></AllInstructorsStyling>)
                }

            </div>
        </div>
    );
};

export default Instructors;