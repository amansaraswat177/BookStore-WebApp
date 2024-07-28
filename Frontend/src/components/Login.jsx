import { Link } from "react-router-dom"


function Login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Login!</h3>
    {/* Email */}
   <div className="mt-4 space-y-2">
    <span >Email</span>
    <br />
    <input type="email"
    placeholder="Enter Your Email" 
    className="w-80 px-3 py-1 border rounded-md outline-none mt-4"/>
   </div>
   <div className="mt-4 space-y-2">
    {/* PAssword */}
    <span >Password</span>
    <br />
    <input type="text"
    placeholder="Enter Your Password" 
    className="w-80 px-3 py-1 border rounded-md outline-none mt-4"/>
   </div>
  {/* Button */}
  <div className="flex mt-4 justify-around">
    <button className="bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-900">Login</button>
    <p>Not Registered?🥲</p> <Link to="/signup" className="underline text-blue-500 cursor-pointer" >Sign Up</Link>
  </div>
  </div>
</dialog>
    </div>
  )
}

export default Login
