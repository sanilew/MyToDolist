import React from 'react'
import Todo from './Todo';


const Todolist = ({todos}) => {

  return (
    <div>
      {todos.map( (todo) => {
          return <Todo key={todo.key} title={todo.title} />   
      
      })
      }

    
       
    
      
      
      
    </div>
  )
}

export default Todolist
