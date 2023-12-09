import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-xl text-red-500'>Contact Us</h2>
                <h2 className='text-3xl text-red-500 mt-2 font-semibold'>Please Get In Touch With Us</h2>
            </div>
            <div>
            <div className="hero mt-5 mb-20">
            <div className=" mx-aut w-[60%] flex-col lg:flex-row-reverse">
               
                <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className='flex justify-between '>
                            <div className="w-full mr-5">
                              
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered w-full" required />
                            </div>
                            <div className="w-full">
                               
                                <input type="text" placeholder="Your Phone" name="price" className="input input-bordered w-full" required />
                            </div>
                        </div>
                         
                        <div className='flex justify-between mt-3'>
                            <div className="w-full mr-5">
                               
                                <input type="text" placeholder="Your Email" name="cata" className="input input-bordered w-full" required />
                            </div>
                            <div className="w-full">
                              
                                <input type="text" placeholder="Location"  name="Location" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        
                       
                        <div className="form-control mt-5">
                           
                            <textarea className='border border-black-700 p-3' placeholder='Comment' name="comment" id="" cols="30" rows="5"></textarea>
                        </div>
                       
                       
                        <div className="form-control mt-6">
                            <button className="button">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default ContactUs;