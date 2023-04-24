import {BsTextareaT, BsTextParagraph, BsCheck2Square, BsListTask} from 'react-icons/bs'

export function Toolbox(){

let components = [
    {name:'Text Field',type:'text', icon: <BsTextareaT size="30" className='inline ml-2' />,id:'abc'},
    {name:'Text Box',type:'text', icon: <BsTextParagraph size="30" className='inline ml-2' />,id:'abcd'},
    {name:'CheckBox',type:'checkbox', icon: <BsCheck2Square size="30" className='inline ml-2' />,id:'abcde'},
    {name:'Dropdown',type:'file', icon: <BsListTask size="30" className='inline ml-2' />,id:'abcdef'}
]

let componentList = components.map(({name,icon},index) => {
    return  <div             
        className='bg-slate-200 p-2 m-2 rounded-md cursor-move' key={index}>
        <h3 className='text-1xl cursor-move'>{name} {icon}  </h3>
         </div>

})
    return <div className="shadow mx-3 bg-gray-100 py-5 px-2">
        <h2 className="font-bold text-2xl">Toolbox</h2>
        <p>Drag and drop fields from the Toolbox to your form design on the right.</p>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
           {componentList}  
        </div>
    </div>
}