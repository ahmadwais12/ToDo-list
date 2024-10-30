let todoList=[{item:"buy  milk",dueDate:'12/2/2023'},{item:"go to college",dueDate:'12/3/2024'}];

displayItem();
function addTodo(){
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let todoDate=dateElement.value;
  todoList.push({item:todoItem,dueDate: todoDate});
  inputElement.value='';
  dateElement.value='';
  displayItem();
}
function displayItem(){
  let containerElement=document.querySelector('.todo-container');
  let newHTML='';
  for(let i=0;i<todoList.length;i++){
    let {item,dueDate}=todoList[i];
   newHTML+=`
   <span> ${item}</span>
   <span>${dueDate}</span>
   <button class='btn-del' onclick="todoList.splice(${i},1);
   displayItem();">Delete</button>
   `;
  
  }
  containerElement.innerHTML=newHTML;
}