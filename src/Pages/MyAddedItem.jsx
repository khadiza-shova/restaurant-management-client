import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import MyAddedCard from '../Components/MyAddedCard';
import PageTitle from '../Components/PageTitle';

const MyAddedItem = () => {

    const {user}= useContext(AuthContext);
    const [item,setItem]= useState([]);

    const email = user?.email;

    useEffect(()=>{
        fetch(`https://restaurant-management-server-gamma.vercel.app/additem?email=${email}&sort=2`)
        .then(res=>res.json())
        .then(data=>{
           setItem(data)
        })
    },[])

    
    return (
        <div className='max-w-[1150px] mx-auto mt-10'>
      <PageTitle title="Cafeu || Add Added Item"></PageTitle>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                item.map(addedSingleItem => <MyAddedCard key={addedSingleItem._id} addedSingleItem={addedSingleItem}></MyAddedCard>)
            }
        </div>
        </div>
        
    );
};

export default MyAddedItem;