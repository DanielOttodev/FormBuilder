export default function FormEngine(props){
// props will eventually be the formTemplate?
let formTemplate = {
    form:{
        name:"My First Form",
        fields:[
            {Row:1,Fields:[{type:'text',placeholder:'Name',id:21}]},
            {Row:2,Fields:[{type:'number',placeholder:'Phone',id:1234},{type:'number',placeholder:'Phone',id:1283},{type:'number',placeholder:'Phone',id:188}]}
        ]
    }
}
let formFields = formTemplate.form.fields;
let rowFields;
let allRows = []

for(let x = 0; x < formFields.length; x ++){
// Loop through the main fields array to determine the amount of rows; Loop through the row fields to determine the amount of columns & fields in the row. 

let gridCount;
if(formFields[x].Fields.length === 4) gridCount = 4;
if(formFields[x].Fields.length === 3)  gridCount = 3;
if(formFields[x].Fields.length === 2)  gridCount = 2;
if(formFields[x].Fields.length === 1)  gridCount = 1;
console.log(formFields[x].Fields.length)
rowFields = formFields[x].Fields.map((columnField,y) => {
    return<div key={y} className="col-span-12 md:col-span-3">
        <input className="text-2xl p-2 mt-3 ml-5 border rounded" type={columnField.type} placeholder={columnField.placeholder}></input>
    </div>
})
let row = <div className={'grid gap-4 grid-cols-12'} key={x}>
    {rowFields}
</div>
allRows.push(row);
}

return(
    <div className="m-3 container">
    <h3 className="text-3xl">{formTemplate.form.name}</h3>
    {allRows}
    <button className="bg-sky-500 text-white rounded hover:border-bg-sky-500 w-full">Submit</button>
    </div>

)
}