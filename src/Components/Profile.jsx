import React, { useEffect } from 'react';
import image from '../assets/image.jpg';
import { useSearchParams, useLocation } from 'react-router-dom';

function Profile() {
  const [searchParams] = useSearchParams();
//   const location = useLocation(); // Hook to get the current path
  const paste = searchParams.get("pasteId");

  // Check if the path is "pastes"
  const isPastesPath = location.pathname === '/pastes';

  return (
    <div className='flex justify-around items-center mt-3'>
      <div className='flex-col'> 
        <img className='rounded-[50%] h-28 w-28 mt-2 max-sm:mt-2 max-sm:h-20 max-sm:w-20 max-sm:ml-3' src={image} alt="" />
        <h3 className='text-[#00FF00] font-bold mt-3 max-sm:ml-3 max-sm:text-sm'>Humayun Imtiaz</h3>
      </div>
      <h2 className='text-[#00FF00] text-3xl mt-6 mb-14 font-bold max-sm:text-sm max-sm:mr-5'>
        {isPastesPath ? "Search Your Notes" : (paste ? "Your Update Notes" : "Write & Save Notes")}
      </h2>
    </div>
  );
}

export default Profile;
