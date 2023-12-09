import React, { useContext } from 'react';
import PageTitle from './PageTitle';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const UpdateItem = () => {
    
    const {user}= useContext(AuthContext);

    const singleItem = useLoaderData();
    const paramsData = useParams();
    const data = singleItem.find(item => item._id == paramsData.id);
    console.log(data);
    // const {_id, name, image, cata, price, addedName, origin, shortDescription } = data;

    return (
        <div>
        <div className="hero mt-5 mb-20">
        <PageTitle title="Cafeu || Food Update"></PageTitle>
        <div className="w-[40%] flex-col lg:flex-row-reverse">
           
            <div className="card flex-shrink-0  shadow-2xl bg-base-100">
                <form className="card-body w-full">
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
                        <button className="button">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    );
};

export default UpdateItem;