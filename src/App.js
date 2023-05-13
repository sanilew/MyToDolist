// import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import FormComponent from './Component/FormComponent';
import Todolist from './Component/Todolist';


function App() {
  const [todos,SetTodos]=useState([
    {
     id:1,
     title:"Play",
    
     isCompleted: false


    },


{
     id:2,
     title:"Play Cricket",
    
     isCompleted: true

} ,
{
  id:3,
  title:"Play Chess",
 
  isCompleted: false

} 
  ]);
  const addTodo=() => {
    console.log("hi")
  }
  return (
    <>
   <FormComponent addTodo={addTodo}/>     
   <Todolist todos={todos}/>
    </>
  );
}

export default App;
