// This serves as a 'index' / master file to the fields in the form.
import { InputField } from "./InputField";

export function FormField({props}){
const { html,type,placeholder,id } = props;
if(html === 'input'){ return  <div>
    <label htmlFor="" className="text-left">{placeholder}</label>
    <input className="text-1xl p-1 m-1  border-2 rounded w-full outline-gray-300" type={type} placeholder={placeholder}></input>
    </div>

}
}