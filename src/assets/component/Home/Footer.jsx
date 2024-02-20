
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


  const onclic=()=>{
    toast.success("Fine",{
       position:"top-center",
    })
}
export const Footer = () => {

    const [input, setInput] = useState({
        name: '',
        email: '',
        Message: ''
    });
    
  return (
    <>
      <div className="mt-[10%] sm:grid sm:grid-cols-2 justify-around px-10 container">
        <div>
          <h1 className="sm:text-4xl text-2xl font-bold">Let’s work together</h1>
          <br />
       
          <span className="sm:text-xl text-[15px] font-semibold">
            "Embark on a collaborative journey as we join forces to bring your
            vision to life. With a commitment to excellence, we offer a range of
            services tailored to meet your unique needs. Our skilled team brings
            creativity and expertise to every project, ensuring impactful
            results. Let's turn ideas into reality and navigate the creative
            process together. Together, we'll achieve success through effective
            collaboration and the realization of your goals."
          </span>
        </div>


     <form action="">
        <div className="sm:ml-[10%] sm:mt-0 mt-[10%]">
         <div >
            <input required className="p-[5%] text-black  mt-[5%] w-[100%] bg-[#F3F3F3]" type="text" placeholder="Enter a Name" />
         </div>
         <div >
            <input required className="p-[5%] text-black mt-[5%] w-[100%] bg-[#F3F3F3]" type="email" placeholder="Enter a Email" />
         </div>


         <div className="mb-4">
              
                <textarea required placeholder="Enter a Message"   rows="10" className="text-black  p-2 w-full border rounded-md mt-[10%] bg-[#F3F3F3]" ></textarea>
            </div>
          <button onClick={onclic} className="bg-black text-white p-4 text-2xl">Submit</button>
        </div>
        </form>
      </div>

      
      <ToastContainer/>
    </>
  );
};
