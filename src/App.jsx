import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormEngine from './FormEngine'
import { Toolbox } from './FormEngine/components/Toolbox'


function App() {

  return (

   
    <div className='grid grid-cols-5 gap-3'>
      <div className='col-span-2'>
   
        <Toolbox></Toolbox>
  
      
    </div> 
      <div className='border rounded shadow p-10 col-span-3'>
        <div className="flex justify-center">
          <a href="https://vitejs.dev">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" >
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className='font-bold'>Form Engine</h1>
        <FormEngine ></FormEngine>
      </div>

    </div>

    
  )
}

export default App
