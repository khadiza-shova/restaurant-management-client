import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import PageTitle from './PageTitle';

const FoodPurchase = () => {

    const {user}= useContext(AuthContext);
    const navigate = useNavigate();
    const handleOrder =(e)=>{
        
        e.preventDefault();
        const form = e.target;
        const name = form.foodName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const buyerName = form.buyerName.value;
        const buyerEmail =form.buyerEmail.value;
        const date = form.date.value;
       
        const orderData ={name,price,quantity,buyerName,buyerEmail,date}
        console.log(orderData);

        fetch("https://restaurant-management-server-gamma.vercel.app/order",{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(orderData)
        }).
        then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Order Successfully Complete !",
                    icon: "success"
                  });
                  navigate("/");
            }
        })
    }
    return (
        <div>
            <div className="hero mt-5 mb-20">
            <PageTitle title="Cafeu || Food Purchase"></PageTitle>
            <div className="w-[40%] flex-col lg:flex-row-reverse">
               
                <div className="card flex-shrink-0  shadow-2xl bg-base-100">
                    <form onSubmit={handleOrder} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input type="text" placeholder="" name='foodName' className="input input-bordered" required />
                        </div>
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                        </div>
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" placeholder="Quantity" name='quantity' className="input input-bordered" required />
                        </div>
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='buyerName' readOnly defaultValue={user.displayName} className="input input-bordered" required />
                        </div>
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='buyerEmail' readOnly defaultValue={user.email} className="input input-bordered" required />
                        </div>
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buying Date</span>
                            </label>
                            <input type="text" placeholder="" name='date' className="input input-bordered" required />
                        </div>
                       
                        <div className="form-control mt-6">
                            <button className="button">Purchase Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FoodPurchase;