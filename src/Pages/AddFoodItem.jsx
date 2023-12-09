import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../Components/PageTitle';

const AddFoodItem = () => {
    const {user}= useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleAddItem =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const cata = form.cata.value;
        const quantity = form.quantity.value;
        const addedName = form.addedName.value;
        const origin = form.origin.value;
        const shortDescri = form.shortDescri.value;
        const image = form.image.value;

       
        const addItem ={name,price,cata,quantity,addedName,origin,shortDescri,image}
        

        fetch("https://restaurant-management-server-gamma.vercel.app/addItem",{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(addItem)
        }).
        then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Item Added Successfully!",
                    icon: "success"
                  });
                  navigate("/");
            }
            
        })
    }
    return (
        <div>
       <PageTitle title="Cafeu || Add New Item"></PageTitle>

              <div className="hero mt-5 mb-20">

            <div className="w-[50%] flex-col lg:flex-row-reverse">
               
                <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                    <form onSubmit={handleAddItem} className="card-body">
                        <div className='flex justify-between '>
                            <div className="w-full mr-5">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered w-full" required />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" required />
                            </div>
                        </div>
                         
                        <div className='flex justify-between '>
                            <div className="w-full mr-5">
                                <label className="label">
                                    <span className="label-text">Food Category</span>
                                </label>
                                <input type="text" placeholder="" name="cata" className="input input-bordered w-full" required />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Food Quantity</span>
                                </label>
                                <input type="text" placeholder=""  name="quantity"className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className='flex justify-between '>
                            <div className="w-full mr-5">
                                <label className="label">
                                    <span className="label-text">Added By </span>
                                </label>
                                <input type="text" placeholder="" name="addedName" defaultValue={user?.email&& user.email} className="input input-bordered w-full" required />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Food origin</span>
                                </label>
                                <input type="text" placeholder="Price" name='origin' className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Image</span>
                            </label>
                            <input type="text" placeholder="Image" name="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description </span>
                            </label>
                            <textarea className='input input-bordered' name="shortDescri" id="" cols="30" rows="10"></textarea>
                        </div>
                       
                       
                        <div className="form-control mt-6">
                            <button className="button">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddFoodItem;