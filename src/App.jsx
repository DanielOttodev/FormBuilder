import './App.css'
import FormEngine from './FormEngine'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
       <Navbar></Navbar>
        <div className='border rounded shadow px-5 py-10 main-content'>
          <Routes>
            <Route path ="/" element={<FormEngine/>}></Route>
            </Routes>           
    
          </div>
      </div>


    
  )
}

export default App
