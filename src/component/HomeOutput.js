import React from 'react';

const HomeOutput = ({hmDataOutput}) => {
    return (
        <div className='home-main-area'>
            <div className='home-content'>
                <h1>{hmDataOutput.bannertitle}</h1>
                <p>{hmDataOutput.bannercontent}</p>
                <a href={hmDataOutput.bannerbutton}>Read More</a>
            </div> 
            <div className='home-content'>
                <img src={hmDataOutput.bannerimage.sourceUrl} />
             </div> 
        </div>
    );
};

export default HomeOutput;