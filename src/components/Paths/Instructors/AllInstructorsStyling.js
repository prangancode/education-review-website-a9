import React from 'react';

const AllInstructorsStyling = (props) => {
    const { name, profession, img, description } = props.instructor;
    return (
        <div className=" ring-4 ring-gray-300 rounded-xl shadow-xl">
            <img className="rounded-t-xl  w-full object-cover" src={img} alt="" ></img>
            <div className="flex flex-col p-7">
                <div className="flex flex-row">
                    <div className=" text-xl uppercase bg-green-300 p-1 px-2 text-white rounded-2xl line-clamp-1 hover:line-clamp-none">
                        {name}
                    </div>
                </div>
                <div>
                    <p className="text-base text-blue-600 text-lg font-bold mt-1 line-clamp-5 hover:line-clamp-none">
                        {profession}
                    </p>
                    <p className="text-base text-gray-600 mt-1 line-clamp-5 hover:line-clamp-none">
                        {description}
                    </p>
                </div>
                <div>
                    <button className="bg-white border border-gray-400 font-semibold hover:bg-gray-100 mt-4 px-4 py-2 rounded shadow text-gray-800 w-2/3 ">
                        Portfolio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllInstructorsStyling;