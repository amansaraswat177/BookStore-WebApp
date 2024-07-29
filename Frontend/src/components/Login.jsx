import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
  <div className="modal-box">
    <Link to = "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      
    
    <h3 className="font-bold text-lg">Login!</h3>
    {/* Email */}
   <div className="mt-4 space-y-2">
    <span >Email</span>
    <br />
    <input type="email"
    placeholder="Enter Your Email" 
    className="w-80 px-3 py-1 border rounded-md outline-none mt-4"
    {...register("email", { required: true })}/>
    <br />
    {errors.email && <span className="text-sm text-red-600 ">This field is required</span>}
   </div>
   <div className="mt-4 space-y-2">
    {/* PAssword */}
    <span >Password</span>
    <br />
    <input type="password"
    placeholder="Enter Your Password" 
    className="w-80 px-3 py-1 border rounded-md outline-none mt-4"
    {...register("password", { required: true })}/>
    <br />
    {errors.password && <span className="text-sm text-red-600 ">This field is required</span>}
   </div>
  {/* Button */}
  <div className="flex mt-4 justify-around">
    <button type="submit" className="bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-900">Login</button>
    <p>Not Registered?🥲</p> <Link to="/signup" className="underline text-blue-500 cursor-pointer" >Sign Up</Link>
  </div>
  </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
