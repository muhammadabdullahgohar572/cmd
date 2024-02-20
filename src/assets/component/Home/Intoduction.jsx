
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

import mee from "../../img/nav/abdullah.jpg"
  const onclic=()=>{
    toast.success("Hi , How are you",{
       position:"top-center",
    })
}
export const Intoduction = () => {

  return (
    <>
      <div className="sm:grid sm:grid-cols-2  m-[5%] sm:m-[10%]">
        <div>
          <h1 className="sm:text-xl  text-2xl font-bold h-1 cursor-pointer">
                I'M MUAHAMMAD ABDULLAH GOHAR
          </h1>
        
          <br />
          <h1 className="sm:text-3xl text-2xl font-bold h-1  mt-[10%]  cursor-pointer">
            <span className="sm:mr-4 text-3xl text-[#FFB400] sm:m-0 mr-[5%] ">Full-Stack</span>
            Developer
          </h1>
          <br />
          <br />

          <span className='font-semibold sm:text-xl'>
            Experienced MERN Stack developer adept at creating dynamic web
            applications with proficiency in MongoDB, Express.js, React.js, and
            Node.js. Passionate about delivering seamless user experiences
            through efficient full-stack development.
          </span>
          <br />
          <br />
          <button className="bg-[#FFB400] sm:inline-block hidden p-5 " onClick={onclic}>
            Here Me
            <i className="fa-solid fa-arrow-right ml-[10px]"></i>
          </button>

          <button className="bg-[#FFB400] p-5 sm:hidden inline-block " onClick={onclic}>
            Here Me
            <i className="fa-solid fa-arrow-down ml-[10px] "></i>
          </button>
         
        </div>


        <div className='ml-[10%]'>
            <img src={mee} alt="" className='w-[80%] h-[100%] sm:m-0 mt-[10%] ' />
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};
