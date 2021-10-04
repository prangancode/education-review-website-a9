import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const AllInstructorsStyling = (props) => {
    const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
    const instagram = <FontAwesomeIcon icon={faInstagramSquare} />
    const { name, profession, img, description } = props.instructor;
    return (
        <div className=" ring-4 ring-green-300 rounded-xl shadow-xl">
            <img className="rounded-t-xl  w-full object-cover" src={img} alt="" ></img>
            <div className="flex flex-col p-7">
                <div className="flex flex-row justify-center items-center">
                    <div className="text-2xl uppercase bg-green-300 p-1 px-2 text-white rounded-2xl">
                        {name}
                    </div>
                </div>
                <div>
                    <p className="text-lg text-blue-600 font-bold mt-1 line-clamp-5 hover:line-clamp-none text-center">
                        {profession}
                    </p>
                    <p className="text-base text-gray-600 mt-1 line-clamp-5 hover:line-clamp-none">
                        {description}
                    </p>
                </div>

                <div className=' mt-4 rounded-full text-3xl text-green-500 w-2/4 mx-auto'>
                    <p className=' p-1 flex justify-center items-center'>
                        <span className="mx-3"> {facebook} </span>
                        <span className="mx-3">{twitter}</span>
                        <span className="mx-3">{instagram}</span> </p>
                </div>
            </div>
        </div>
    );
};

export default AllInstructorsStyling;