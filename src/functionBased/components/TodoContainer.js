import React, { useState, useEffect } from "react"

import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";




const TodoContainer = () => {

  const  [todos, setTodos] = useState(getInitialTodos())
  /*state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
  };*/

  const handleChange = id => {
    setTodos(prevState =>     
       prevState.map(todo => {     
        if (todo.id === id) {  
          return {
            ...todo, completed: !todo.completed
          }      
        }      
        return todo;    
      })  
    );    
  };

  const delTodo = id => {

     setTodos([      
        ...todos.filter(todo => {        
          return todo.id !== id;      
        }),    
      ]  
    );
  };

  const addTodoItem = title => {
    const newTodo = {    
      id: uuidv4(),    
      title: title,    
      completed: false  
    };  
    setTodos([...todos, newTodo]);
  };
  
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  //useEffect(param1:fonction  ,  (facultatif)param2: tableau[])
  //ici on récupére depuis le stockage local du navigateur
  /*useEffect(() => {
    console.log("test run")
        // getting stored items
      const temp = localStorage.getItem("todos")
      const loadedTodos = JSON.parse(temp)

      if (loadedTodos) {
        setTodos(loadedTodos)
      }
    }, [])*/

    function getInitialTodos() {
      // getting stored items
      const temp = localStorage.getItem("todos")
      const savedTodos = JSON.parse(temp)
      return savedTodos || []
    }

    //ici on insert dans le stockage local du navigateur
    useEffect(() => {
      // storing todos items
      const temp = JSON.stringify(todos)
      localStorage.setItem("todos", temp)
    }, [todos])
  
    return (
      <>
      
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList 
                todos={todos} 
                handleChangeProps={handleChange} 
                deleteTodoProps={delTodo}
                setUpdate ={setUpdate} 
              />
            </div>
          </div>
          
        </>
      
      
    );
  
}
export default TodoContainer