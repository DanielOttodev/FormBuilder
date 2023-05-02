// This serves as a 'index' / master file to the fields in the form.
import { InputField } from "./InputField";

export function FormField({props}){
const { html,type,placeholder,id,required,values } = props;
if(html === 'input'){ return  <div>
    <label htmlFor="" className="text-left">{placeholder} {required && <span>*</span> }  </label>
    <input required={required} className="text-1xl p-1 m-1  border-2 rounded w-full outline-gray-300" type={type} placeholder={placeholder}></input>
    </div>

}
if(html === 'textarea'){
    return <div>
            <label htmlFor="" className="text-left">{placeholder} {required && <span>*</span> }  </label>
    <textarea required={required} className="text-1xl p-1 m-1  border-2 rounded w-full outline-gray-300" type={type} placeholder={placeholder}></textarea>
    </div>
}
if(html === 'checkbox'){
    return <div className="flex gap-5 py-2">
           {values.map((x,index) => { return <div key={x}> 
           <input type="checkbox" className="mr-2 w-4 h-4 inline" value={x}   />
           <label>{x}</label>  
           </div>})}
    </div>
}
}