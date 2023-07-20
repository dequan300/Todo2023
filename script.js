//create a area that takes in todos
//display todos


// let ul = document.querySelector("ul")


// let arrayList=[]

// let button = document.querySelector(".submit")
// function addTodo(){
//     button.addEventListener("click",()=>{
//     let value=  document.querySelector("#todo").value

//         let li = document.createElement("li")
        
       
//          li.innerHTML=`${value}`
         
         
//          ul.appendChild(li)
         
        
//          deleteTodo(li)
//       })
      
// }

// function deleteTodo(li){
//     li.addEventListener("dblclick",(ev)=>{

//        ev.target.style.display="none"
        
//        })

// }

// addTodo()



let todoArray=[]
const button=document.querySelector(".submit")
const listContainer=document.querySelector("ul")
function addTodo(){
const inputField= document.querySelector("input")
const list=document.querySelector("ul")
todoArray.push(inputField.value)
inputField.value=""
listContainer.innerHTML=""

console.log(todoArray)
todoArray.forEach(element => {
const listItem=document.createElement("li")
listItem.innerText=element
listItem.classList.add("listItem")
list.append(listItem)
 });

}

listContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains("listItem")){
        deleteTodo(e)
    }
    console.log("hello")

})

function deleteTodo(e){

let container=listContainer.children
let deleteItem =e.target
let index =Array.from(container).indexOf(deleteItem)
todoArray.splice(index,1)
deleteItem.remove()
    
}

button.addEventListener('click',addTodo)
