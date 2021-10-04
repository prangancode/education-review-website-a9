import React from 'react';

const CourseStyling = (props) => {
    const { course_name, author_name, description, img, price } = props.course;
    return (
        <div className=" ring-4 ring-indigo-300 rounded-xl shadow-xl">
            <img className="rounded-t-xl  w-full object-cover" src={img} alt="" ></img>
            <div className="flex flex-col p-7">
                <div className="flex flex-row">
                    <div className=" text-xs uppercase bg-yellow-100 p-1 px-2 text-yellow-700 rounded-2xl line-clamp-1 hover:line-clamp-none">
                        {author_name}
                    </div>
                </div>
                <div>
                    <h2 className="p-1 text-blue-700 font-bold text-xl line-clamp-5 hover:line-clamp-none">
                        {course_name}
                    </h2>
                    <p className="text-base text-gray-600 mt-1 line-clamp-5 hover:line-clamp-none">
                        {description}
                    </p>
                    <h4 className="p-1 text-red-500 font-semibold text">Course Price : ${price}</h4>
                </div>
                <div>
                    <button className="bg-white border border-gray-400 font-semibold hover:bg-indigo-400 hover:text-white mt-4 px-4 py-2 rounded shadow text-gray-800 w-2/3">
                        Course Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseStyling;