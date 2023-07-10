//create a area that takes in todos
//display todos


let ul = document.querySelector("ul")


let arrayList=[]

let button = document.querySelector(".submit")
function addTodo(){
    button.addEventListener("click",()=>{
    let value=  document.querySelector("#todo").value

        let li = document.createElement("li")
        
       
         li.innerHTML=`${value}`
         
         
         ul.appendChild(li)
         
        
         deleteTodo(li)
      })
      
}

function deleteTodo(li){
    li.addEventListener("dblclick",(ev)=>{

       ev.target.style.display="none"
        
       })

}

addTodo()
