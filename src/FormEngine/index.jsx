import { BsPlusCircle, BsXCircle, BsClipboard } from "react-icons/bs";

export default function FormEngine(){

function submit(){
    alert('Submitted!')
}

function addRow(){
    alert('Lets make a new row!')
}
// props will eventually be the formTemplate?
let formTemplate = {
    form:{
        name:"My First Form",
        fields:[
            {Fields:[{type:'text',placeholder:'Name',id:'drag-21'}]},
            {Fields:[{type:'number',placeholder:'Phone',id:'drag-22'}
            ,{type:'text',placeholder:'Email',id:'drag-23'},{type:'number',placeholder:'ABN',id:'drag-24'}]}
        ]
    }
}
let formFields = formTemplate.form.fields;
let rowFields;
let allRows = []

for(let x = 0; x < formFields.length; x ++){
// Loop through the main fields array to determine the amount of rows; Loop through the row fields to determine the amount of columns & fields in the row. 

// Calculate how many columns in the row
let gridCount;
if(formFields[x].Fields.length >= 4)  gridCount = 4;
if(formFields[x].Fields.length === 3)  gridCount = 3;
if(formFields[x].Fields.length === 2)  gridCount = 2;
if(formFields[x].Fields.length === 1)  gridCount = 1;

rowFields = formFields[x].Fields.map((columnField,y) => {
    return <div key={y}>
                <div className="container relative rounded border-dotted cursor-move group m-2">
                    <div className="overlay flex hidden group-hover:block border-2 border-gray-500 border-dashed rounded">
                    <p>Drag to reposition</p>

                    <button className="p-1 rounded-md text-center align-middle text-xs cursor-pointer">Delete Field <BsXCircle size={14} className=" inline text-red-600 mx-2"></BsXCircle> </button>
                    <button className="p-1 rounded-md ml-1 text-center align-middle text-xs cursor-pointer">Copy Field <BsClipboard size={14} className=" inline text-green-600 mx-2"></BsClipboard> </button>
                    <h4></h4>
                    </div>
                    <input className="text-2xl p-2 m-1  border-2 rounded w-full outline-gray-300" type={columnField.type} placeholder={columnField.placeholder}></input>
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
    <h3 className="text-3xl">{formTemplate.form.name}</h3>
    {allRows}

    <div className="text-center">
    <button onClick={addRow} className="p-2 rounded mt-5 text-gray-400 outline-dashed outline-1 hover:outline-gray-500 focused:outline-none">Add Row<BsPlusCircle size={24} className="inline ml-2 text-gray-400" ></BsPlusCircle></button>
    </div>
    <div>
    <button onClick={submit} className="bg-sky-500 px-4 py-2 text-white rounded hover:outline-gray-300 mt-5 outline-none">Submit</button>
    </div>
    </div>

)}
