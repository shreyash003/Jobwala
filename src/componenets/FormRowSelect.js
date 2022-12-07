const FormRowSelect = ({labelText,value,name,handleChange,list})=>{
 return(
  <div className="form-row">
   <label htmlFor={name} className="form-label">
    {labelText || name}
    </label>
    <select name={name} value={value} onChange={handleChange} id={value} className="form-select">
     {list.map((itemValue,index)=>{
     return(
      <option value={itemValue} key={index}>
       {itemValue}
       </option>
     )
     })}
     </select>
   </div>
 )
}

export default FormRowSelect;