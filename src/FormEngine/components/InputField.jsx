export  function InputField(props){
const type = props.type

if(type === 'text'){
    return  <div>
        <label htmlFor="" className="text-left">{props.placeholder}</label>
        <input className="text-1xl p-1 m-1  border-2 rounded w-full outline-gray-300" type={type} placeholder={props.placeholder}/>
    </div>
}else{
    return null
}
}
