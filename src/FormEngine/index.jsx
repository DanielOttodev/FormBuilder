import { useState } from "react";
import { BsPlusCircle, BsXCircle, BsClipboard, BsPencilFill,BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill,BsFillArrowUpSquareFill,BsFillArrowDownSquareFill } from "react-icons/bs";
import {FaUndo} from "react-icons/fa"
import { Draggable } from "react-beautiful-dnd";

export default function FormEngine(){

    const [previousField,setPreviousField] = useState([]);
    const [fieldSet,setFieldSet] = useState([
        {Fields:[{type:'text',placeholder:'Name',id:'drag21'}],id:'row1'},
        {Fields:[{type:'number',placeholder:'Phone',id:'drag22'},{type:'text',placeholder:'Email',id:'drag23'},{type:'number',placeholder:'ABN',id:'drag24'}],id:'row2'},
        {Fields:[{type:'text',placeholder:'Test2',id:'drag25'},{type:'number',placeholder:'Test3',id:'drag26'}],id:'row3'}
    ]);

    const [formData,setFormData] = useState({
    form:{
        name:"My First Form",
    }
});
function removeField(e){
    let dataTarget = e.target.getAttribute('data-target')
    let arr = dataTarget.split('-');
    setFieldSet((prev) => {
        setPreviousField(prev);
        const newData = prev.map(items => ({
            ...items,
            Fields: items.Fields.filter(item => item.id !== arr[1])
       
        }))
        return newData;
    })
    console.log('AFTER SPLICE:',fieldSet);
}

function submit(){
    alert('Submitted!')
}

function addRow(){
    alert('Lets make a new row!')
}
function undo(){
setFieldSet(previousField);
}

let rowFields;
let allRows = []

for(let x = 0; x < fieldSet.length; x ++){
// Loop through the main fields array to determine the amount of rows; Loop through the row fields to determine the amount of columns & fields in the row. 
// Calculate how many columns in the row

let gridCount;
gridCount = fieldSet[x].Fields.length

rowFields = fieldSet[x].Fields.map((columnField,y) => {
    return <div key={y}>
                <div className="container relative rounded border-dotted cursor-pointer group ">
                    <div className="overlay flex hidden group-hover:block border-2 border-gray-500 border-dashed rounded">
                    <button className="p-1 rounded-md mx-1 text-center align-middle text-xs cursor-pointer hover:bg-slate-100">Add<BsPlusCircle size={14} className=" inline text-green-600 mx-2"></BsPlusCircle> </button>
                    <button className="p-1 rounded-md mx-1 text-center align-middle text-xs cursor-pointer hover:bg-slate-100">Edit <BsPencilFill size={14} className=" inline text-blue-600 mx-2"></BsPencilFill> </button>
                    <button data-target={x + '-' +columnField.id} onClick={removeField} className="hover:bg-red-600 p-1 rounded-md text-center align-middle text-xs cursor-pointer mx-1 bg-red-500 text-white">Delete<BsXCircle size={14} className="text-white inline text-red-600 mx-2"></BsXCircle> </button>
                    <div className="flex justify-between">
                       <BsFillArrowLeftCircleFill data-target={x + '-' +columnField.id} onClick={() => {alert('Moving!')}} size={20} className="ml-3"></BsFillArrowLeftCircleFill>
                       <BsFillArrowRightCircleFill data-target={x + '-' +columnField.id} size={20} className="mr-3"></BsFillArrowRightCircleFill>
                    </div>
                    </div>
                    <input  className="text-2xl p-2 m-1  border-2 rounded w-full outline-gray-300" type={columnField.type} placeholder={columnField.placeholder}></input>
                </div>
            </div>
   
})
// Render the row with it's respective columns
console.log('RowFields:',rowFields);

let row = <div className="group/row ease-in hover:border-x-2 rounded border-sky-300">
        <BsFillArrowUpSquareFill size={24} className="hidden group-hover/row:block text-sky-300 hover:cursor-pointer"></BsFillArrowUpSquareFill>
            <div key={x}
         className={'  grid gap-x-3 p-2 mx-auto grid-cols-'+gridCount}>
        {rowFields}
        </div>
        <BsFillArrowDownSquareFill size={24} onClick={() =>{ alert('clicked')}} className="hidden group-hover/row:block text-sky-300 hover:cursor-pointer"></BsFillArrowDownSquareFill>
</div>

       
console.log('Row:',row);        
allRows.push(row);
}

console.log('AR:',allRows)
return(
    <div>
    <div className="m-3 container mx-auto  ">
    <h3 className="text-3xl">{formData.form.name}</h3>
    {allRows}


    <div>
    <button onClick={submit} className="bg-sky-500 px-4 py-2 text-white rounded hover:outline-gray-300 mt-5 outline-none">Submit</button>
    </div>
    <div className="text-center">
    <button onClick={addRow} className="p-2 rounded mt-5 text-gray-400 outline-dashed outline-1 hover:outline-gray-500 focused:outline-none">Add Row<BsPlusCircle size={24} className="inline ml-2 text-gray-400" ></BsPlusCircle></button>
    </div>
    </div>
    {previousField.length >= 1 && <button onClick={undo} className="ml-2 p-1 rounded hover:text-sky-500 text-sm text-gray-500 "><FaUndo size={16} className="inline"></FaUndo></button> }

    </div>

)}
