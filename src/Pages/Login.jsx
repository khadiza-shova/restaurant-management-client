import React, { useContext } from 'react';
import LoginImg from "../assets/login-page-4468581-3783954.webp"
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import PageTitle from '../Components/PageTitle';

const Login = () => {

    const {signUser,googleAuth}= useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const handleLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
       
       
        // const UserData ={email,pass}
        signUser(email,pass)
        .then(()=>{
            console.log("User Login Successfully");
            Swal.fire({
                title: "Good job!",
                text: "Login Successfully Complete !",
                icon: "success"
              });
              navigate(location.state?location.state:"/");
              
            
        })
        .catch(error=>{
            console.log(error.message);
        })
        
    }

    const handleGoogle=()=>{
        googleAuth()
        .then(res=>{
            console.log(res.user);
            Swal.fire({
                title: "Good job!",
                text: "Login Successfully Complete !",
                icon: "success"
              });
              navigate(location.state?location.state:"/");
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <PageTitle title="Cafeu || Login"></PageTitle>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ml-20">
                    <img src={LoginImg} className='w-full' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="pass" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="button">Login</button>
                        </div>

                        <p>Not Registered ? <NavLink to="/register" className="text-red-700 font-semibold mt-2">Create AN Account</NavLink></p>
                    </form>

                    <button onClick={handleGoogle}className='button m-5'>Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;