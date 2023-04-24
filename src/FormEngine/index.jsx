export default function FormEngine(){

function submit(){
    alert('Submitted!')
}
// props will eventually be the formTemplate?
let formTemplate = {
    form:{
        name:"My First Form",
        fields:[
            {Row:1,Fields:[{type:'text',placeholder:'Name',id:21}]},
            {Row:2,Fields:[{type:'number',placeholder:'Phone',id:1234},{type:'text',placeholder:'Email',id:1283},{type:'number',placeholder:'ABN',id:188}]}
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
    return<div key={y} className="">
        <input className="text-2xl p-2 mt-3 ml-5 border-2 rounded w-full outline-gray-300" type={columnField.type} placeholder={columnField.placeholder}></input>
        </div>
})
// Render the row with it's respective columns
let row = <div className={'grid gap-x-3  mx-auto grid-cols-'+gridCount} key={x}>
            {rowFields}
            </div>
allRows.push(row);
}

return(
    <div className="m-3 container mx-auto">
    <h3 className="text-3xl">{formTemplate.form.name}</h3>
    {allRows}
    <div>
    <button onClick={submit} className="bg-sky-500 text-white rounded hover:outline-gray-300 mt-5 outline-none">Submit</button>
    </div>
    </div>

)
}