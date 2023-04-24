import { useState } from "react";
import { BsPlusCircle, BsXCircle, BsClipboard } from "react-icons/bs";


export default function FormEngine(){

    const [fieldSet,setFieldSet] = useState([
        {Fields:[{type:'text',placeholder:'Name',id:'drag21'}]},
        {Fields:[{type:'number',placeholder:'Phone',id:'drag22'},{type:'text',placeholder:'Email',id:'drag23'},{type:'number',placeholder:'ABN',id:'drag24'}]}
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

let rowFields;
let allRows = []

for(let x = 0; x < fieldSet.length; x ++){
// Loop through the main fields array to determine the amount of rows; Loop through the row fields to determine the amount of columns & fields in the row. 
// Calculate how many columns in the row
let gridCount;
if(fieldSet[x].Fields.length >= 4)  gridCount = 4;
if(fieldSet[x].Fields.length === 3)  gridCount = 3;
if(fieldSet[x].Fields.length === 2)  gridCount = 2;
if(fieldSet[x].Fields.length === 1)  gridCount = 1;

rowFields = fieldSet[x].Fields.map((columnField,y) => {
    return <div key={y}>
                <div className="container relative rounded border-dotted cursor-move group m-2">
                    <div className="overlay flex hidden group-hover:block border-2 border-gray-500 border-dashed rounded">
                    <p>Drag to reposition</p>

                    <button data-target={x + '-' +columnField.id} onClick={removeField} className="p-1 rounded-md text-center align-middle text-xs cursor-pointer">Delete Field <BsXCircle size={14} className=" inline text-red-600 mx-2"></BsXCircle> </button>
                    <button className="p-1 rounded-md ml-1 text-center align-middle text-xs cursor-pointer">Copy Field <BsClipboard size={14} className=" inline text-green-600 mx-2"></BsClipboard> </button>
                    <h4></h4>
                    </div>
                    <input  className="text-2xl p-2 m-1  border-2 rounded w-full outline-gray-300" type={columnField.type} placeholder={columnField.placeholder}></input>
                </div>
            </div>
   
})
// Render the row with it's respective columns
console.log(gridCount)
let row = 
            <div  className={'grid gap-x-3 mx-auto grid-cols-'+gridCount} key={x}>
                {rowFields}
            </div>
          
allRows.push(row);
}
return(
    <div className="m-3 container mx-auto">
    <h3 className="text-3xl">{formData.form.name}</h3>
    {allRows}

    <div className="text-center">
    <button onClick={addRow} className="p-2 rounded mt-5 text-gray-400 outline-dashed outline-1 hover:outline-gray-500 focused:outline-none">Add Row<BsPlusCircle size={24} className="inline ml-2 text-gray-400" ></BsPlusCircle></button>
    </div>
    <div>
    <button onClick={submit} className="bg-sky-500 px-4 py-2 text-white rounded hover:outline-gray-300 mt-5 outline-none">Submit</button>
    <button onClick={() => {console.log(fieldSet)}}>Test</button>
    </div>
    </div>

)}
