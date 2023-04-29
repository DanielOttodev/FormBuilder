/* eslint-disable react/prop-types */
import { useState } from 'react'
export function EditPanel(props){
console.log(props.selected);
if(props.selected.html === 'input'){
    return <div className="mx-3 shadow py-10 px-3">
    {!props.selected.id && 
    <div>
          <h2 className="font-bold text-2xl text-gray-500">Field Editor</h2>
      <p>Select a field from the form to start editing.</p> 
     </div> }
     <h2 className="font-bold text-2xl text-gray-500 mb-5">Editing: <span className='italic'>{props.selected.placeholder}</span></h2>   
     <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
         <div>
         <label htmlFor="">Question / Label</label>
         <input className='text-1xl p-1 m-1  border-2 rounded w-full outline-gray-300' type="text" placeholder={props.selected.placeholder} />
         </div>
     </div>
 </div>
}
else{
    return <h1>Nothing ?</h1>
}
}