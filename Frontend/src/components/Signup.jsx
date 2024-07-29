import React from 'react'
import { Link } from "react-router-dom"
import Login from './Login'
import { useForm } from "react-hook-form"
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
   <>
   <div className='flex h-screen items-center justify-center border'>
   <div className=" border-[2px] shadow-md  rounded-md modal-box">
  <div className="text-lg">
    <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to = "/"  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

    <h3 className="font-bold ">SignUp!</h3>
    {/* Name */}
    <div className="mt-4 space-y-2">
    <span >Name</span>
    <br />
    <input {...register("name", { required: true })} type="text"
    placeholder="Enter Your Full Name" 
    className="w-80 px-3 py-1 border rounded-md outline-none mt-4"/>
    <br />
    {errors.email && <span className="text-sm text-red-600 ">This field is required</span>}
   </div>
    {/* Email */}
   <div className="mt-4 space-y-2">
    <span >Email</span>
    <br />
    <input {...register("email", { required: true })} type="email"
    placeholder="Enter Your Email" 
    className="w-80 px-3 py-1 border rounded-md outline-none mt-4"/>
    <br />
    {errors.email && <span className="text-sm text-red-600 ">This field is required</span>}
   </div>
       {/* PAssword */}
   <div className="mt-4 space-y-2">

    <span >Password</span>
    <br />
    <input {...register("password", { required: true })} type="password"
    placeholder="Enter Your Password" 
    autocomplete="current-password"
    className="w-80 px-3 py-1 border rounded-md outline-none mt-4"/>
    <br />
    {errors.email && <span className="text-sm text-red-600 ">This field is required</span>}
   </div>
  {/* Button */}
  <div className="flex mt-4 justify-around">
    <button className="bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-900">SignUp</button>
    <p>Already Registered?🥲</p> <button to="/" className="underline text-blue-500 cursor-pointer"
    onClick={()=> 
        document.getElementById("my_modal_3").showModal()
    }
    >LogIn</button>
    <Login/>
  </div>
  </form>
  </div>
</div>
</div>
   </>
  )
}

export default Signup
