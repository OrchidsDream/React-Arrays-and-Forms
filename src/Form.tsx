import { ChangeEvent, useState } from "react"

export default function Form () {
    const [ flavor, setFlavor] = useState("");
    const [active, setActive] = useState(false);
    function handleFlavorChange(e:ChangeEvent<HTMLInputElement>){
        setFlavor(e.target.value);
    }

    return (
        
        <div>
            <input id= "Flavor"  value = {flavor} onChange= {handleFlavorChange}>    
            </input>
            <label htmlFor="Flavor">Flavor</label>
            <p>{flavor}</p>
            <input id = "checkbox" type = "checkbox" checked = {active} onChange = {(e) => {setActive(e.target.checked); 
            setFlavor("")}}></input>
            <label htmlFor = "checkbox">Checkbox</label>
            {active || <p>You didn't check the checkbox</p>}
            
            
        </div>
    )
}