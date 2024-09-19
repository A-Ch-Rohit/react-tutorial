import { useState } from "react";

interface Props{
  items:string[],
  heading:string,
  onSelectItem:(item:string)=>void
};

function ListGroup({items,heading,onSelectItem}:Props) {
  //let items = ["Chennai", "Madurai", "Tirunelveli", "Coimbatore"];
  //items=[];
  /*let getItems=()=>{
    return items.length===0 && <p>No Items found</p>;
  }*/

  var [selectedIndex,setSelectedIndex]=useState(-1);
  return (
    <>
      <h1>{heading}</h1>

      <h4>Concise Coding- Without ternary operator and using function for conditional rendering</h4>
      {items.length===0?<p>No Items Found</p>:null}
      <h4>Without ternary operator and without function for conditional rendering</h4>
      {items.length===0&&<p>No Items Found</p>}
      
      <ul className="list-group">
        {items.map((item,index) => (
          <li key={item} className={selectedIndex==index?"list-group-item active":"list-group-item"} 
              onClick={()=>{
                setSelectedIndex(index);
                onSelectItem(item);
                }}>
            {item}
          </li>
        ))}
        <li className="list-group-item">A</li>
        <li className="list-group-item">B</li>
        <li className="list-group-item">C</li>
        <li className="list-group-item">D</li>
      </ul>
    </>
  );
}
export default ListGroup;
