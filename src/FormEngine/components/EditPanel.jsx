/* eslint-disable react/prop-types */
import { useState } from 'react'
export function EditPanel(props){
console.log(props.selected.html);



let editFields;

if(props.selected.html === 'input'){
  
    editFields = <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
         <div>
         <label htmlFor="">Question / Label</label>
         <input className='p-1 m-1  border-2 rounded w-full outline-gray-300' type="text" placeholder={props.selected.placeholder} />
         </div>
     </div>


}

 if (props.selected.html === 'textarea'){

    editFields =    <h1>Textarea</h1>  }



return <div className="mx-3 shadow pb-2 pt-8  border bg-slate-50 px-3">
    {props.selected.html == null && <div> <h2 className="font-bold text-2xl text-gray-500">Field Editor</h2>
    <p className='text-xl'>Select a field from the form to start editing.</p> </div> }
    {props.selected.html != null &&
    <div>
        <h2 className="font-bold text-2xl text-gray-500 mb-5">Editing: <span className='italic'>{props.selected.placeholder}</span></h2>  
        {editFields}
    <div className='flex justify-end align-bottom'>
        <button className='p-2 bg-green-500 rounded-md text-white'>Save</button>
    </div>
    </div> }
    </div>
}

