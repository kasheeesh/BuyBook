import React from 'react'
import { Link, Navigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // const onSubmit = async (data) => {
    //     const userInfo = {
    //         fullname:data.fullname,
    //         email:data.email,
    //         password:data.password,
    //     }
    //     await axios.post("http://localhost:3000/user/signup",userInfo) 
    //     .then((res)=>{
    //         console.log(res.data)
    //         if(res.data){
    //             alert("Signup Successfully")
    //         }
    //     }).catch((err) => {
    //         if(err.response){
    //             console.log(err);
    //             alert("Error: " + err.response.data.message);
    //         }
    //         localStorage.setItem("Users", JSON.stringify(res.data.user));
    //     })
    // };
    const onSubmit = async (data) => {
    const userInfo = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
    };

    try {
        const res = await axios.post("http://localhost:3000/user/signup", userInfo);
        console.log(res.data);
        if (res.data) {
            toast.success("Sign Up Successful")

            // Store user data in localStorage upon successful signup
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            <Navigate to="/"/>
        }
    } catch (err) {
        if (err.response) {
            console.log(err);
            // alert("Error: " + err.response.data.message);
            toast.error(err.response.data.message);
        }
    }
};

  return (
    <>
    <div  className='flex h-screen items-center justify-center'>
        <div className="w-[600px]" >
        <div className='modal-box'>
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to ="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Sign Up</h3>
             <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br/>
                <input  {...register("fullname", { required: true })}type='text' placeholder='Enter your name' className='w-80 px-3 py-1 border rounded-md outline-none'/>
            </div>
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br/>
                <input {...register("email", { required: true })} type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'/>
            </div>
            <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br/>
                <input {...register("password", { required: true })} type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'/>
            </div>
            <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Signup</button>
                <p>Have Account?<button to="/"  className='underline text-blue-500 cursor-pointer' onClick={()=> document.getElementById("my_modal_3").showModal()}> Login</button>
                </p>
            </div>
             <Login/>
            </form>
        </div>
        
        </div>
    </div>
    </>
    
  )
}

export default SignUp