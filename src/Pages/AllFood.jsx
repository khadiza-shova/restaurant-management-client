import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../Components/FoodCard';
import PageTitle from '../Components/PageTitle';

const AllFood = () => {

    

    const allFood = useLoaderData();
    const [items, setItems] = useState(allFood);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage, setperPage] = useState(9);

    const itemPerPage = Math.ceil(count / perPage);
    const pages = [...Array(itemPerPage).keys()];


    useEffect(() => {
        fetch('https://restaurant-management-server-gamma.vercel.app/itemsCount')
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, [])


    useEffect(() => {
        fetch(`https://restaurant-management-server-gamma.vercel.app/allFood?page=${currentPage}&size=${perPage}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [currentPage, perPage]);

    const handlePrev=()=>{
        if(currentPage > 0){
            setCurrentPage(currentPage-1);
        }
    }

    const handleNext=()=>{
        if(currentPage < pages.length-1){
            setCurrentPage(currentPage+1);
        }
    }



    return (
        <div className='w-11/12 mx-auto mt-10'>
            <PageTitle title="Cafeu || All Food Items"></PageTitle>
            <h2 className='text-center text-3xl font-semibold'>Top Food Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                {
                    items?.map(Food => <FoodCard key={Food._id} Food={Food}></FoodCard>)
                }

            </div>
            <div className='flex justify-center items-center my-10'>
                <div className='pagination'>
                    <button onClick={handlePrev}  className='btn'>Prev</button>

                    {
                        pages.map(page => <button
                            className={currentPage === page ?'selected': undefined}
                            onClick={() => setCurrentPage(page)}
                            key={page}
                        >{page}</button>)
                    }
                    <button onClick={handleNext} className='btn'>Next</button>
                </div>

            </div>
        </div>
    );
};

export default AllFood;