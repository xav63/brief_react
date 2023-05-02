import React, { useState } from "react";
const Barre = ({list, setList, filterfield = item => item, ...props}) =>
{
   const [value, setValue] = useState("")

   const filterList = () => {
    return list.filter(item => filterfield(item).toLowerCase().includes(value.toLocaleLowerCase()))
   }

   const handleChange = event => {
    setValue(event.target.value)
    setList(filterList())
   }
   
    <form>
        <input type="text" placeholder="Rechercher une recette" name= "search" onChange={handleChange} value={value} {...props} />
    </form>
}
export default Barre; 