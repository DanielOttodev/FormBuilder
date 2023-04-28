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
       <div>
        <ul className='flex justify-end py-2 px-5'>
      <li> <a href=""><AiTwotoneSetting className='ml-2 inline text-orange-500' size={20}/></a></li>
        </ul>
       </div>
        <div className='border  shadow px-5 py-10'>
          <Routes>
            <Route path ="/" element={<FormEngine/>}></Route>
            </Routes>           
    
          </div>
       </div>

      </div>


    
  )
}

export default App
