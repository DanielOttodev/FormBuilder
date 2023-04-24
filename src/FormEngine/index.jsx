import { BsPlusCircle } from "react-icons/bs";
export default function FormEngine(){

function submit(){
    alert('Submitted!')
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
    console.log(formFields[x]);
    return <div key={y}>
        <input className="text-2xl p-2 mt-3 ml-5 border-2 rounded w-full outline-gray-300" type={columnField.type} placeholder={columnField.placeholder}></input>
        </div>
   
})
// Render the row with it's respective columns

let row = <div  
 className={'grid gap-x-3  mx-auto grid-cols-'+gridCount} key={x}>
    {rowFields}
</div>

console.log('Pushing row index: ' + x)
allRows.push(row);
}
return(
    <div className="m-3 container mx-auto">
    <h3 className="text-3xl">{formTemplate.form.name}</h3>
    {allRows}
    <div className="text-center">
    <button className="mt-5 text-gray-400 outline-dashed outline-1 hover:border-gray-300 focused:outline-none">Add Row<BsPlusCircle size={24} className="inline ml-2 text-gray-400" ></BsPlusCircle></button>
    </div>

    <div>
    <button onClick={submit} className="bg-sky-500 text-white rounded hover:outline-gray-300 mt-5 outline-none">Submit</button>
    </div>
    </div>

)}
