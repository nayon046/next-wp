import React from 'react';

const AboutPage = ({AboutPageData}) => {
    return (
 
        <div className='home-main-area'>
            <div className='home-content'>
                <h2>{AboutPageData.abouttitle}</h2>
                <p>{AboutPageData.aboutcontent}</p>
            </div> 
             <div className='home-content'>
                <img src={AboutPageData.aboutimage.sourceUrl} alt=""/>
            </div> 
        </div>
    );
};

export default AboutPage;


