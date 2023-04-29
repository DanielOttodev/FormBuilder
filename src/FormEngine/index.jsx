import { useState } from "react";
import { BsPlusCircle, BsXCircle, BsPencilFill,BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill,BsFillArrowUpSquareFill,BsFillArrowDownSquareFill,BsTrash3 } from "react-icons/bs";
import {FaUndo} from "react-icons/fa"
import { EditPanel } from "./components/EditPanel";
import { v4 as uuidv4 } from 'uuid';
import { FormField } from "./components/FormFields";
export default function FormEngine(){
    const [selected,setSelected] = useState({});
    const [previousField,setPreviousField] = useState([]);
    const [fieldSet,setFieldSet] = useState([
    
        {Fields:[{type:'text',placeholder:'Name',id:uuidv4(), html:'input'}],id: uuidv4()},
        {Fields:[{type:'number',placeholder:'Phone',id:uuidv4(), html:'input'},{type:'text',placeholder:'Email',id:uuidv4(), html:'input'},{type:'number',placeholder:'ABN',id:uuidv4(), html:'input'}],id: uuidv4()},
        {Fields:[{type:'text',placeholder:'Test2',id:uuidv4(), html:'input'},{type:'number',placeholder:'Test3',id:uuidv4(), html:'input'}],id: uuidv4()},
        {Fields:[],id: uuidv4()},
        
    
    ]);

    const [formData,setFormData] = useState({
    form:{
        name:"My First Form",
    }
});

function selectField(elem,rowIndex){
let index = fieldSet[rowIndex].Fields.findIndex((x) => x.id == elem);
setSelected(fieldSet[rowIndex].Fields[index]);
}

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
}

function submit(){
    alert('Submitted!')
}
function addNewField(){
    alert('new field dialog')
}
function innerRight(elem,rowIndex){
    let index = fieldSet[rowIndex].Fields.findIndex((x) => x.id == elem);
    if (index === fieldSet[rowIndex].Fields.length - 1){
        alert('Cant move right')
    }else{
        let copyArr = fieldSet[rowIndex].Fields;
        let element = fieldSet[rowIndex].Fields[index];
        copyArr.splice(index, 1);
        copyArr.splice(index + 1, 0, element);
        let newArr = [... copyArr];
        let newFieldSet = fieldSet;
        newFieldSet[rowIndex].Fields = newArr;
        let updateSet = [...newFieldSet];
        setFieldSet(updateSet);
    }
}

// Moves a column left within a row in the form
function innerLeft(elem,rowIndex){

let index = fieldSet[rowIndex].Fields.findIndex((x) => x.id == elem);
if (index === 0){
    alert('Cant move left')
}else{
    let copyArr = fieldSet[rowIndex].Fields;
    let element = fieldSet[rowIndex].Fields[index];
    copyArr.splice(index, 1);
    copyArr.splice(index - 1, 0, element);
    let newArr = [... copyArr];
    let newFieldSet = fieldSet;
    newFieldSet[rowIndex].Fields = newArr;
    let updateSet = [...newFieldSet];
    setFieldSet(updateSet);
}}

// Adds a row to the form
function addRow(){
let arr = fieldSet;
let [...newArr] = arr;
newArr.push({Fields:[],id: uuidv4()})
setFieldSet(newArr);
}

// Return the state of the form before the last change
function undo(){
setFieldSet(previousField);
}

// Move a row up in the form
function rowUp(elem){
let index = fieldSet.findIndex((x) => x.id == elem)
// Check it is not the first row / position 0
if(index === 0){
    alert("Can't move up further")
} else{
let copyArr = fieldSet;
let element = fieldSet[index];
copyArr.splice(index, 1);
copyArr.splice(index - 1, 0, element);
let newArr = [... copyArr];
setFieldSet(newArr);
}}

// Move a row down in the form
function rowDown(elem){
let index = fieldSet.findIndex((x) => x.id == elem);
if(index === fieldSet.length - 1){
    alert('Cant move down');
}else{
let copyArr = fieldSet;
let element = fieldSet[index];
copyArr.splice(index, 1);
copyArr.splice(index + 1, 0, element);
let newArr = [... copyArr];
setFieldSet(newArr);
}}

// Delete a row from the form
function deleteRow(elem){
let index = fieldSet.findIndex((x) => x.id == elem);
let copyArr = fieldSet;
copyArr.splice(index,1);
let newArr = [...copyArr];
setFieldSet(newArr);

}
let rowFields;
let allRows = []

for(let x = 0; x < fieldSet.length; x ++){
// Loop through the main fields array to determine the amount of rows; Loop through the row fields to determine the amount of columns & fields in the row. 
// Calculate how many columns in the row
let gridCount;
gridCount = fieldSet[x].Fields.length
if(gridCount > 0 ) {

rowFields = fieldSet[x].Fields.map((columnField) => {
    return <div key={columnField.id}>
                <div className="container relative rounded border-dotted cursor-pointer group ">
                    <div onClick={() => selectField(columnField.id,x)}   className="overlay flex hidden group-hover:block border-2 border-gray-500 border-dashed rounded text-center">
                    <button className="p-1 rounded-md mx-1 text-center align-middle bg-green-200 text-xs cursor-pointer hover:bg-slate-100">Add<BsPlusCircle size={14} className=" inline text-green-600 mx-2"></BsPlusCircle> </button>
                    <button data-target={x + '-' +columnField.id} onClick={removeField} className="hover:bg-red-600 p-1 rounded-md text-center align-middle text-xs cursor-pointer mx-1 bg-red-500 text-white">Delete<BsXCircle size={14} className="text-white inline text-red-600 mx-2"></BsXCircle> </button>
                    <div className="flex justify-between">
                       <BsFillArrowLeftCircleFill data-target={x + '-' +columnField.id} onClick={() => innerLeft(columnField.id,x)} size={20} className="ml-3"></BsFillArrowLeftCircleFill>
                       <BsFillArrowRightCircleFill data-target={x + '-' +columnField.id} onClick={() => innerRight(columnField.id,x)} size={20} className="mr-3"></BsFillArrowRightCircleFill>
                    </div>
                    </div>
                    <div className="text-left">
                    <FormField props={columnField} />
                    </div>

                </div>
            </div>
   
})}
else{
    
    rowFields = <div key={'new'}>
    <div className="container rounded border-dotted cursor-pointer group mt-2 text-center">
        <button className="rounded px-2 py-1 text-lg bg-slate-100" onClick={addNewField}>Add Element</button>
    </div>
</div>
}
// Render the row with it's respective columns
let row = <div className={"group/row ease-in hover:border-2 border-dashed rounded border-orange-300"} data-target={fieldSet[x].id} key={fieldSet[x].id}>
        <BsFillArrowUpSquareFill onClick={() => rowUp(fieldSet[x].id)} size={24} className="hidden group-hover/row:block text-orange-300 hover:cursor-pointer"></BsFillArrowUpSquareFill>
            <div 
         className={'grid gap-x-3 p-1 mx-auto grid-cols-'+gridCount}>
        {rowFields}
        </div>
        <div className="flex justify-between">
        <BsFillArrowDownSquareFill size={24} onClick={() => rowDown(fieldSet[x].id)}  className="hidden group-hover/row:block text-orange-300 hover:cursor-pointer"></BsFillArrowDownSquareFill>
        <BsXCircle size={24} onClick={() => deleteRow(fieldSet[x].id)}  className="hidden inline mb-1 mr-1 right group-hover/row:block text-gray-800 hover:cursor-pointer"></BsXCircle>
        </div>
     
    </div>  
allRows.push(row);
}
return(
    <div className="grid grid-cols-6 gap-2  ">
    <div className="m-3 container mx-auto col-span-6 border  shadow p-5">
    <h3 className="text-3xl mb-5 text-center">{formData.form.name}</h3>
    {allRows}
    <div className="text-center">
    <button onClick={submit} className="bg-sky-500 px-4 py-2 text-white rounded hover:outline-gray-300 mt-5 outline-none ">Submit</button>
    </div>
    <div className="text-center">
    <button onClick={addRow} className="w-full p-2 rounded mt-5 text-gray-400 outline-dashed outline-1 hover:outline-gray-500 focused:outline-none">Add Row<BsPlusCircle size={24} className="inline ml-2 text-gray-400" ></BsPlusCircle></button>
    {previousField.length >= 1 && <button onClick={undo} className="ml-2 p-1 rounded hover:text-sky-500 text-sm text-gray-500 "><FaUndo size={16} className="inline"></FaUndo></button> }
    </div>
    </div>
    <div className="col-span-6 " >
        <EditPanel selected={selected}></EditPanel>
    </div>
   
    </div>

)}
