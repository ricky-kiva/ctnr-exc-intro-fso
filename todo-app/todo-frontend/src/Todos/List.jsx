import React from 'react'
import Todo from './Todo'

const List = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos.map(todo => (
        <React.Fragment key={todo._id || todo.id || Math.random().toString()}>
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
          <hr />
        </React.Fragment>
      )).slice(1)}
    </>
  )
}


export default List
