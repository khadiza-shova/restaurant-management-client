import React from 'react';
import PageTitle from '../Components/PageTitle';

const Blog = () => {
    return (
        <>
        <PageTitle title="Cafeu || Blog"></PageTitle>

        <div className='max-w-[1150px] mx-auto'>
            <h2 className='text-center text-3xl my-5 font-semibold'>All Blog</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="my-10">

                    <div className="card card-compact mx-auto first-letter:bg-base-100 shadow-xl">
                        <figure><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--htL7tL7O--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/no3yozbtq4em4xms31h0.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">What is one way data binding in react</h2>
                            <p>
                                One-way data binding in a way to bind data from the component to the view (DOM) or vice versa - from view to the component. It is used to display information to the end-user which automatically stays synchronized with each change of the underlying data.it's easier to trace the source of data changes and debug issues in your application. When data flows in a single direction, you can isolate problems more effectively, making it easier to maintain and refactor code.</p>
                        </div>
                    </div>
                </div>

                <div className="my-10">
                    

                    <div className="card card-compact mx-auto first-letter:bg-base-100 shadow-xl">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPfhm2vjCdFNIUx9vIzlXaDPMYIoAeqaeHHRA2WlLDhzmqIWwxw5V0XTGh6oVV9G4_A60&usqp=CAU" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">What is npm in nodejs</h2>
                            <p>
                                npm stands for Node Package Manager.It's a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies. npm is free and relied on by over 11 million developers worldwide</p>
                        </div>
                    </div>
                </div>
                <div className="my-10">

                    <div className="card card-compact mx-auto first-letter:bg-base-100 shadow-xl">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VTmCpTHlChnMQ0-cNwnM1oHh8GWDT59jTw&usqp=CAU" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">What is one way data binding in react</h2>
                            <p>
                                MySQL is a relational database management system (RDBMS) from the
                                Oracle Corporation. Like other relational systems, MySQL stores data
                                in tables and uses structured query language (SQL) for database
                                access. When MySQL developers need to access data in an application,
                                they merge data from multiple tables together in a process called a
                                join. In MySQL, you predefine your database schema and set up rules
                                to govern the relationships between fields in your tables.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Blog;