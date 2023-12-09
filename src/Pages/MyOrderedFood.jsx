import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../Components/PageTitle';

const MyOrderedFood = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  

  const email = user?.email;

  useEffect(() => {
    fetch(`https://restaurant-management-server-gamma.vercel.app/order?email=${email}&sort=2`)
      .then(res => res.json())
      .then(data => {
        setOrders(data)
      })
  }, [])


  const handleDelete =(id)=>{
    console.log("Deleted Id",id);

    fetch(`https://restaurant-management-server-gamma.vercel.app/OrderItem/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      
      if(data.deletedCount){
        Swal.fire({
          title: "Good job!",
          text: "Order Item Delete Successfully!",
          icon: "success"
        });

        const remaining = orders.filter(orderR=> orderR._id !== id);
        setOrders(remaining);
        
      }
    })
  }


  return (
    <div className='max-w-[1150px] mx-auto mt-10'>
      <PageTitle title="Cafeu || Ordered Food"></PageTitle>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Food Name</th>
              
              <th>Price</th>
              <th>Added Time</th>
              <th>Food Owner</th>
              <th>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(order=>
                <>
                <tr>

                <td>
                 { order.name}
                </td>
                
                <td>{ order.price}</td>
                <td>
                { order.name}
                </td>
                <td>
                { order.buyerName}
                </td>
                <td>
                  <button onClick={()=>handleDelete(order._id)} className='button'>Delete</button>
                </td>
              </tr>
              </>
              )
             
            }
          </tbody>


        </table>
      </div>
    </div>
  );
};

export default MyOrderedFood;