import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Home from './Components/Home'
import Pastes from './Components/Pastes'
import Viewpage from './Components/Viewpage'




const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        
      <div className='max-lg: bg-black max-sm:bg-black flex justify-start w-full max-sm:w-full  '>
        <Navbar/>
        </div>
        <div className=' flex justify-center '>
        <div className=' mt-4  w-[55%] max-sm:w-[70%]  h-[500px]  flex-col items-center bg-black rounded-xl '>
        <Profile/>
        <Home/>
        </div>
        </div>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <div className='bg-black flex justify-start w-full'>
        <Navbar/>
        </div>
        <div className=' flex justify-center '>
        <div className=' mt-4  w-[60%] h-[100%] max-sm:w-[70%]  flex-col items-center bg-black rounded-lg'>
        <Profile/>
        <Pastes/>
        </div>
        </div>
        
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        
      <div className='bg-black flex justify-start w-full'>
        <Navbar/>
        </div>
        <div className=' flex justify-center '>
        <div className=' mt-4  w-[55%] max-sm:w-[70%] h-[500px]   flex-col items-center bg-black rounded-xl '>
        <Profile/>
        <Viewpage/>
        </div>
        </div>
      </div>
        
       
     
    }

  ]
)
function App() {
  

  return (
   <div>
    <RouterProvider router={router}/>

   </div>
  )
}

export default App
