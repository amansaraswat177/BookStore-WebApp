import Cards from "../components/Cards"

import { Link, Routes } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
const Course = () => {
  const [book,setBook] = useState([]);
  useEffect(()=>{
    const getBook = async ()=>{
      try{
     const res=  await axios.get("http://localhost:4001/book");
     console.log(res.data);
     setBook(res.data)
      }
      catch(error){
      console.log("ERROR :", error);
      }
    }
    getBook();
  },[])
  return (
 <>
 <div className="`max-w-screen-2xl container mx-auto md:px-20 px-4 ">
  <div className="mt-28 items-center justify-center text-center  " >
    <h1 className="text-2xl  md:text-4xl  ">We are Delighted to have you 
    <span className="text-pink-500">  here : )</span>
    </h1>
    <p className="mt-12 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit id magni temporibus sunt quos repellendus similique consequatur ullam doloribus cupiditate minima, quasi eos rem iste velit voluptas. Distinctio labore maiores explicabo nam voluptatibus.</p>
    <Link to="/">
    <button className=" bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-900 mt-6">Back</button>
    </Link>
  </div>
  <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
    {
     book.map((item)=>
     <Cards key={item.id} item = {item}/>)
    }
  </div>
 </div>
 </>
  )
}

export default Course
