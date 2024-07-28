import React from 'react'
import { Link } from "react-router-dom"
import Login from './Login'
const Signup = () => {
  return (
   <>
   <div className='flex h-screen items-center justify-center border'>
   <div className=" border-[2px] shadow-md  rounded-md modal-box">
  <div className="text-lg">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to = "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold ">SignUp!</h3>
    {/* Name */}
    <div className="mt-4 space-y-2">
    <span >Name</span>
    <br />
    <input type="text"
    placeholder="Enter Your Full Name" 
    className="w-80 px-3 py-1 border rounded-md outline-none mt-4"/>
   </div>
    {/* Email */}
   <div className="mt-4 space-y-2">
    <span >Email</span>
    <br />
    <input type="email"
    placeholder="Enter Your Email" 
    className="w-80 px-3 py-1 border rounded-md outline-none mt-4"/>
   </div>
       {/* PAssword */}
   <div className="mt-4 space-y-2">

    <span >Password</span>
    <br />
    <input type="text"
    placeholder="Enter Your Password" 
    className="w-80 px-3 py-1 border rounded-md outline-none mt-4"/>
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
  </div>
</div>
</div>
   </>
  )
}

export default Signup
