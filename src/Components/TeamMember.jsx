import React from 'react';

const TeamMember = () => {
    return (
        <div className='my-20 '>
           <div className='text-center'>
           <p className='text-red-500'>Our Team</p>
            <h1 className='text-3xl font-medium text-red-500 mt-2'>Meet Out Team</h1>
           </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
            <div className=''>
                <img src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/team/4.png" alt="" />
               <div className='text-center mt-5'>
               <h2>Jimmy </h2>
                <p>Chief Executive</p>
               </div>
            </div>
            <div>
                <img src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/team/1.png" alt="" />
               <div className='text-center mt-5'>
               <h2>Nataha</h2>
                <p>Executive</p>
               </div>
            </div>
            <div>
                <img src="https://cafeu-html.codebasket.net/cafeu-html/assets/img/team/2.png" alt="" />
                <div className='text-center mt-5'>
                <h2>Mike By Dolly</h2>
                <p>Food Lovers</p>

                </div>
            </div>
        </div>
        </div>
      
    );
};

export default TeamMember;