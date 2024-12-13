
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react"; // Import useState
import { removeFromPast } from "../Redux/PastSlice";
import toast from "react-hot-toast";


const Pastes=() =>{
   // All data of pastes
   const pastes = useSelector((state) => state.paste.pastes);
   console.log(pastes)

 // search mai ju dala hai woh idhr track krlia
  const [searchTerm, setSearchTerm]= useState('');

  // jb kisi ko edite krny lgy gy tb dispatch ka use kry gy
  const dispatch= useDispatch();

 // Data ko filter kry gy
  const filteredData= pastes.filter(
    (paste)=>paste.title.
    toLowerCase().includes
    (searchTerm.toLowerCase())
  );

  function handleDelete(pasteId){
    dispatch(removeFromPast(pasteId))
  }

  return (

    <div>
      <input className='p-2 border-black rounded-2xl mt-4 border w-[550px] max-sm:w-[250px] max-sm:h-10 bg-gray-500 text-[#00FF00] '
      type='search'
      placeholder='Search Hre'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      
      />
     
        {
          filteredData.length>0 &&
          filteredData.map(
            (paste)=>{
              return(
                
                <div className=" p-2 flex-col ml-24  w-[551px] text-[#00FF00] max-sm:w-[250px] max-sm:h-[40%] max-sm:ml-7 max-sm:p-2  mt-8 rounded-2xl h-[70%] border mb-4 ">                
                   
                    <div className="flex-col  items-center">
                      <div className="flex justify-center gap-5  max-sm:text-[13px]">
                    <button  >
                      {/* iska logic Home.jsx mai hai */}
                      
                      <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                    </button>

                    <button>
                     <a href={`/pastes/${paste?._id}`}>
                     View</a>
                    </button>

                    <button
                    onClick={()=>handleDelete(paste?._id)}>Delete</button>

                    <button
                    onClick={()=>{
                      navigator.clipboard.writeText(paste.content)
                      toast.success("Copy Sucessfully")
                    }}>Copy</button>
                    <button
                      onClick={() => {
                        navigator.share
                          ? navigator.share({ text: paste.content ,url: window.location.href})
                          : toast.error("Sharing not supported");
                        
                      }}
                    >
                      Share
                    </button>
                  </div>
                  <div className=" mt-3 max-sm:text-[13px]">
                    {paste.CreatedAt}
             
                  </div>
                  </div>
                  
                  <div className="border rounded-md bg-gray-500 w-[100%]  mt-4 p-3">  

                   <span className=" font-bold">{paste.title }</span>
                   
                  </div>
                
                  <div className="  rounded-lg bg-gray-500 w-[100%] max-sm:w-[100%] mt-4  p-3">
                  {paste.content}
                  </div>
                  </div>
              
             
                

                
              )
            }
          )
        }
      </div>
    
  )
}

export default Pastes