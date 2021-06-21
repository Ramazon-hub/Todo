var todoFrom = document.querySelector('.todo-form');
var todoInput = document.querySelector('.todo-form__input');
var todosList = document.querySelector('.todos-list');
var todoArray = [];
var id = todoArray.length+1;
var monitoring;
var count = 0;
    todoFrom.addEventListener('submit',function(evt){
        evt.preventDefault();
        var inputValue = todoInput.value;
        if(inputValue.length<=2){
            alert('todoName 3 ta belgidan kam bo\'lmasligi kerak !')
            return
        }
      
        var newObj ={
            id:id++,
            todoName:inputValue,
            isComplated:false,
        
        }
        var newLi = document.createElement('li');
        newLi.className = 'todos-list__item'
        var newP = document.createElement('p')
        newP.className = 'todos__text'
        var newCheckbox =document.createElement('input');
        newCheckbox.type="checkbox";     
        newCheckbox.className = 'todos__check'  ;
        newCheckbox.addEventListener('checked',function(){
            newObj.isComplated = true;
            // count++;
        })
        newP.textContent = newObj.todoName; 
        newLi.appendChild(newCheckbox);
        newLi.appendChild(newP);
       todosList.appendChild(newLi)
         todosList.appendChild(newLi)
        todoArray.push(newObj);
        console.log(todoArray); 
        for(var i of todoArray)
        if(todoArray)
        monitoring = count/newObj.id
        console.log(monitoring)      
        todoInput.value = ''
       
    })

// todoFrom.addEventListener('submit',function (evt) {
//     evt.preventDefault();
//      var inputValue = todoInput.value; 
//      if(inputValue.length<=2){
//          return

//      }
//      todoArray.push(todoInput.value);
//      todosList.innerHTML = '';
     
//      for(var i=0;i<todoArray.length;i++){
//          var newLi = document.createElement('li');
//          newLi.className='todos-list__item';
        //  var newP = document.createElement('p')
        //  newP.className = 'todos__text'
        //  var newCheckbox =document.createElement('input');
        //  newCheckbox.type="checkbox";     
        //  newCheckbox.className = 'todos__check'  
        //  newP.textContent = todoArray[i]; 
        //  newLi.appendChild(newCheckbox);
        //  newLi.appendChild(newP);
        
//          todosList.appendChild(newLi);
        
//      }
//      todoInput.value = '';
 
    
// })
 