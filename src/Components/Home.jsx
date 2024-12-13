import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AddToPastes, UpdatetoPastes } from '../Redux/PastSlice';

function Home() {
    const [title,setTitle]=useState("")
    const[value,setValue]=useState('');
    const[searchParams, setsearchParams]=useSearchParams();
    const pasteId=searchParams.get("pasteId");
    console.log("pasteId:", pasteId);
    const dispatch=useDispatch();
    const allPast =useSelector((state)=>state.paste.pastes);
   
  
    //Edit Functionality
    useEffect(() => {
      if (pasteId) {
        const paste = allPast.find((p) => p._id === pasteId);
        if (paste) {
          setTitle(paste.title);
          setValue(paste.content);
        }
      }
    }, [pasteId,]);
  
  

  
        // For Create 
    function createPaste(){
        const paste={
            title: title,
            content: value,
            _id: pasteId ||
            Date.now().toString(36),
            CreatedAt: new Date().toISOString()
        }
       

        if(pasteId){
          //update 
          dispatch(UpdatetoPastes(paste));
        }
        else{
          
          //created
          dispatch(AddToPastes(paste));
        }



        // after creation or updation should be clean

        
       setTitle('');
       setValue('');
       setsearchParams({});
        // searchParams({});
    }





  return (
    <div>
   
    <div className='flex flex-row gap-7 place-content-between mt-3 ' >
        <input className=' p-3 max-sm:p-2 max-sm:h-9
         border-black rounded-2xl mt-2 border w-[480px] max-sm:w-[180px] bg-gray-500 text-[#00FF00] ml-4'
        type="text"
        placeholder='Enter the Title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}    
            
        />
        <button onClick={createPaste}
         className='p-2  rounded-2xl mt-2 border mr-6 bg-[#00FF00] text-sm w-28 h-11 max-sm:rounded-xl max-sm:h-9 
         max-sm:text-[12px] max-sm:font-bold max-sm:p-1 font-semibold max-sm:'>
            {
                pasteId ? "Update " : "Save"
            }
        </button>       
        
    </div>

    <div>
        <textarea
        className='rounded-2xl mt-4 w-[635px] h-[235px] max-sm:w-[273px] p-2 border mr-2 bg-gray-500 text-[#00FF00]'
        value={value}
        rows={20}
        placeholder='Enter the content'
        onChange={(e)=>{setValue(e.target.value)}}
        />
    </div>


    </div>
  )
}

export default Home