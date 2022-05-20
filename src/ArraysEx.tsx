import { useState } from "react";
import "./ArraysEx.css"
interface Pet {
    name: string,
    type: string,
    id: number;
}

let petArray: Pet[] = [
    {name: "Belle",
    type: "dog",
    id: 1
},
{
    name: "Lucky",
    type: "cat",
    id: 2
}, 
{
    name: "KitKat",
    type: "cat",
    id: 3
}
]

export default function ArraysEx() {
  let colorArray = ["red", "orange", "yellow"];
  const [colors, setColors] = useState(colorArray);
  const [pets, setPets] = useState(petArray)
  function addColor(color: string): void {
      let newArray = colors.slice(0)
      newArray.push(color);
      setColors(newArray);
  }
  return (
 <div>
     <h1>Arrays Exercise</h1>
     <h2>Colors</h2>
    <ol>
      {colors.map((color, index) => (
        <li key = {index}>{color}</li>
      ))}
    </ol>
    <button onClick = {() => addColor ("green")}>Green</button>
    <button onClick = { () => addColor ("blue")}>Blue</button>
    <button onClick = {() => addColor ("violet")}>Violet</button>
        <h2>Pets</h2>
    <table>
        <thead>
            <tr>
                <td>
                    Name
                </td>
                <td>
                    Type
                </td>
            </tr>
        </thead>
        <tbody>
            {pets.map((pet, index) => (<tr key = {pet.id}>
    <td>{pet.name}</td>
    <td>{pet.type}</td>
    </tr>))}
    
            
            
        </tbody>
    </table>
  </div>) 
}
