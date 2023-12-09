import React, { useContext } from 'react';
import RegiImg from "../assets/register.jpg"
import { NavLink, Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2'
import PageTitle from '../Components/PageTitle';

const Register = () => {

    const {createUser}= useContext(AuthContext);

    const handelSignup =(e)=>{

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const pass = form.pass.value;
       
        const UserData ={name,email,photo,pass}
        console.log(UserData);

        createUser(email,pass)
        .then(result=>{
            const user = result.user;
            console.log(user);

            Swal.fire({
                title: "Good job!",
                text: "Registration Successfully Complete !",
                icon: "success"
              });
              <Navigate to="/"></Navigate>


            // UpdateProfile 
            updateProfile(user,{
                displayName:name, photoURL:photo
            }).then(()=>{
                console.log("Profile Updates");
            }).catch(error=>{
                console.log(error.message);
            })


        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
             <PageTitle title="Cafeu || Sign Up"></PageTitle>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ">
                    <img src={RegiImg} className='w-[70%]' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSignup} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="pass" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="button">Registration</button>
                        </div>
                        <p>Have Already An Account ? <NavLink to="/login" className="text-red-700 font-semibold mt-2">Login</NavLink></p>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;