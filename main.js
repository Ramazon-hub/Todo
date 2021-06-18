
var todoFrom = document.querySelector('.todo-form');
var todoInput = document.querySelector('.todo-form__input');
var todosList = document.querySelector('.todos-list');
var todoArray = [];

todoFrom.addEventListener('submit',function (evt) {
    evt.preventDefault();
     var inputValue = todoInput.value; 
     if(inputValue.length<=2){
         return

     }
     todoArray.push(todoInput.value);
     todosList.innerHTML = '';
     for(var i=0;i<todoArray.length;i++){
         var newLi = document.createElement('li');
         newLi.className='todos-list__item';
         var newP = document.createElement('p')
         newP.className = 'todos__text'
         var newCheckbox =document.createElement('input');
         newCheckbox.type="checkbox";     
         newCheckbox.className = 'todos__check'  
         newP.textContent = todoArray[i]; 
         newLi.appendChild(newCheckbox);
         newLi.appendChild(newP);
        
         todosList.appendChild(newLi);
        
     }
     todoInput.value = '';
 
    
})
 