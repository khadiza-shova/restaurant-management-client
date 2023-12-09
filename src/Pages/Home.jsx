import React from 'react';
import Banner from '../Components/Banner';
import TopFood from '../Components/TopFood';
import TeamMember from '../Components/TeamMember';
import ContactUs from '../Components/ContactUs';
import PageTitle from '../Components/PageTitle';

const Home = () => {
    return (
        <div>
          <PageTitle title="Cafeu || Home"></PageTitle>
            <Banner></Banner>
            <div className='max-w-[1150px] mx-auto'>
                <TopFood></TopFood>
                <TeamMember></TeamMember>     
                <ContactUs></ContactUs>     
            </div>
        </div>
    );
};

export default Home;