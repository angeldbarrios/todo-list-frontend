import React, { useState } from 'react';


export default (props) => {
  const [todo, setTodo] = useState(props.todo);
  const [editMode, setEditMode] = useState(false);

  const styleCheckedHandler = () => {
    if (todo.checked === true) {
      return { 'textDecoration': 'line-through' }
    }
  };

  const editModehandleDisplayNoneStyle = (displayNoneTrigger, element) => {
    if(editMode === displayNoneTrigger) {
      return {
        'display': 'none'
      };
    }
  };


  const handleCheck = () => {
    props.handleEdit(todo.id, { checked: !todo.checked }, () => {
      setTodo({ ...todo, checked: !todo.checked });
    })
  };

  const handleDelete = () => {
    props.handleDeletion(todo.id);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleEditNameCompletion = (event) => {
    setEditMode(false);
    props.handleEdit(todo.id, { name: event.target.value }, () => {
      setTodo({  ...todo, name: event.target.value })
    });
  };

  
  return (
    <div className="row py-2 justify-content-between">
      {/* TODO name */}
      <div className="col-auto form-check">

        <input
          id={`check-for-${todo.id}`}
          className="form-check-input" 
          type="checkbox" 
          value={todo.checked}  
          onClick={handleCheck} />

        <label className="form-check-label mx-1" htmlFor={`check-for-${todo.id}`} title={todo.created_at} style={editModehandleDisplayNoneStyle(true)}>
          <h5 style={styleCheckedHandler()}>{todo.name}</h5>
        </label>

        <input
          ref={input => input && input.focus() }
          style={editModehandleDisplayNoneStyle(false, 'input')}
          className="form-control form-control-sm rounded border-0"
          type="text"
          onBlur={handleEditNameCompletion}
          defaultValue={todo.name} />
      </div>

      {/* Edit, remove icons */}
      <div className="col-auto">
        <div className="d-flex">
          <div className="edit-icon">
            <i className="fa fa-pencil text-info btn" title="Edit" onClick={handleEditClick}></i>
          </div>
          <div className="delete-icon">
            <i className="fa fa-trash text-danger btn" title="Delete" onClick={handleDelete}></i>
          </div>
        </div>
      </div>
    </div >
  )
};