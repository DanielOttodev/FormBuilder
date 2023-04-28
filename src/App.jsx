import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormEngine from './FormEngine'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Navbar></Navbar>
        <div className='border rounded shadow p-10'>
          <div className="flex justify-center">
            <a href="https://vitejs.dev">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" >
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className='font-bold text-center'>Form Engine</h1> 
          <Routes>
            <Route path ="/" element={<FormEngine/>}></Route>
            </Routes>           
    
          </div>
      </div>


    
  )
}

export default App
