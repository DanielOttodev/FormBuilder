import './App.css'
import FormEngine from './FormEngine'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import {AiTwotoneSetting} from 'react-icons/ai'


function App() {

  return (
    <div>
       <Navbar></Navbar>
       <div className=' main-content'>
       <div className='border shadow bg-slate-200'>
        <ul className='flex justify-end py-2 px-5'>
          <li><button className='bg-zinc-100 py-1 px-2 rounded-full hover:bg-zinc-200'>Preview Form</button> </li>
      <li> <a href=""><AiTwotoneSetting className='ml-2 inline text-orange-500' size={20}/></a></li>
        </ul>
       </div>
        <div>
          <Routes>
            <Route path ="/" element={<FormEngine/>}></Route>
            </Routes>           
    
          </div>
       </div>

      </div>


    
  )
}

export default App
