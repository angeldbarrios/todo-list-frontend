import React from 'react';
import Todo from './Todo';

export default (props) => {
  const handleDeletion = (todoId) => {
    props.removeTodo(todoId);
  };

  const handleEdit = (todoId, data, callback) => {
    props.editTodo(todoId, data, callback);
  };

  return (
    <>
      {props.todoList.map(todo => {
        return (
          <Todo key={`todo-${todo.id}`} todo={todo} handleDeletion={handleDeletion} handleEdit={handleEdit}/>
        );
      })}
    </>
  );
};