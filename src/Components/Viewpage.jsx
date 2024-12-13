import React from 'react'
import { useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';

const Viewpage =()=> {
  const {id}=useParams();

  const AllData=useSelector((state)=> state.paste.pastes);
   
  const paste= AllData.filter((p)=>p._id===id)[0];
  console.log("new data is :", paste)

  return (
    <div>
    <div className='flex flex-row gap-7 place-content-between mt-3  ' >
        <input className=' border-black rounded-2xl mt-2 border text-center font-bold w-[635px] bg-gray-500
         text-[#00FF00] max-sm:ml-5 ml-4 max-sm:w-[260px] max-sm:p-1'
        type="text"
        placeholder='Enter the Title'
        value={paste.title}
        
        disabled
        onChange={(e)=>setTitle(e.target.value)}    
            
        />
             
        
    </div>

    <div>
        <textarea
         className=' rounded-2xl mt-4 w-[635px] h-[235px] p-2 border mr-3 bg-gray-500 text-[#00FF00] 
         max-sm:w-[260px]'
        value={paste.content}
        rows={20}
        placeholder='Enter the content'
        disabled
        onChange={(e)=>{setValue(e.target.value)}}
        />
    </div>


    </div>
  )
}

export default Viewpage