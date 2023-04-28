import { useState } from 'react'
export function EditPanel(){

const [selected,setSelected] = useState(false);

    return <div className="mx-3 shadow py-10 px-3">
        <h2 className="font-bold text-2xl text-gray-500">Field Editor</h2>
        {!selected &&  <p>Select a field from the form to start editing.</p> }
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
    
        </div>
    </div>
}