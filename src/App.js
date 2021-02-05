import React from 'react';

import './App.css';
import Input from './component/input';
import TodoItem from './component/todoItem';
import {useSelector} from 'react-redux';
import {selectTodoList} from './features/todoSlice';
// == dummy data ==
// const todoList =[ {
//   item : 'todo1',
//   done : false,
//   id : 54845484541
// },{
//   item : 'todo2',
//   done : true,
//   id : 5487758541
// }]

function App() {
  const todoList = useSelector(selectTodoList)
  
  return (
    <div className="App">
      <h1>Let's built todo list with React + Redux</h1>
      <div className='app_container'>
        <div className='app_todoContainer'>
          {
            todoList.map(item => (
                <TodoItem
                  name={item.item}
                  done={item.done}
                  id={item.id}
                />
              )
            )
          }
          
        </div>
        <Input/>
      </div>
    </div>
  );
}

export default App;
