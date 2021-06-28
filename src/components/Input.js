import React from 'react';

export default (props) => {
  const inputRef = React.createRef();

  const clickButtonHandler = () => {
    if (!inputRef.current.value) {
      return;
    }
    
    props.addTodo(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div className="row">

      <div className="col-11">
        <div className="row">

          {/* Input */}
          <div className="col">
            <input
              className="form-control rounded form-control-lg border-0"
              type="text"
              ref={inputRef}
              placeholder="Add new .." />
          </div>

          {/* Button */}
          <div className="col-auto my-auto">
            <button
              type="button"
              className="btn btn-primary px-4"
              onClick={clickButtonHandler}>Add</button>
          </div>
        </div>
      </div>

    </div>
  );
};