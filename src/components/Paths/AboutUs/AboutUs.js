import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="font-sans mx-auto p-16 text-4xl text-center w-3/4 leading-loose prose">
                <blockquote>Whatever discipline you choose, you’ll find your old ideas challenged and your new ideas embraced. Goldsmiths is a place where together we are creating the knowledge of the future.</blockquote>
            </div>
            <div>
                <h1 className='font-semibold text-7xl text-center'>WHO WE ARE</h1>
                <div className='flex mx-auto p-36 w-3/4'>
                    <div className='flex-1 flex-col'>
                        <h1 className='text-3xl mb-4 font-semibold'>An Incubator for Ideas</h1>
                        <p className='text-2xl w-2/3'>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accum dolor same mipsum rvelit. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <div>
                        <img src="http://bookflare.themesflat-addons.com/images/about/detail-1.jpg" alt="" />
                    </div>
                </div>

                <div className='flex mx-auto p-36 w-3/4'>
                    <div className="mr-52">
                        <img src="http://bookflare.themesflat-addons.com/images/about/detail-2.jpg" alt="" />
                    </div>
                    <div className='flex-1 flex-col'>
                        <h1 className='text-3xl mb-4 font-semibold'>An Incubator for Ideas</h1>
                        <p className='text-2xl'>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accum dolor same mipsum rvelit. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;