import React,{useState} from "react"
function Component (){
const [food,setFood]=useState(["apple","orange","bananas"]);
 
function handleAddFood(){
let newItems=document.getElementById("food-input").value
document.getElementById("food-input").value=""
setFood(f=>[...f,newItems])

}
function handleRemove(index){
setFood(food.filter((_,i)=> i !==index))
}
let listItems=food.map((fruits,index)=><li key={index} onClick={()=> handleRemove(index)}>{fruits}</li>)
return(
<>
<h1>Fruits List</h1>
<ul>
    {listItems}
</ul>
<input type="text" placeholder="Enther item" id="food-input"/>
<button onClick={handleAddFood}>Add Item</button>
</>
);
}
export default  Component