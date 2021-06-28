import React from 'react';

export default class Filters extends React.Component {
  state = {
    sortField: undefined,
    sortOrder: 'asc'
  };

  sortableFields = ['name', 'created_at', 'updated_at', 'checked'];

  handleSelectChange = (event) => {
    this.setState({
      sortField: event.target.value
    });
    this.getTodosHandler(event.target.value, this.state.sortOrder);
  };

  handleSortOrderChange = (order) => {
    this.setState({
      sortOrder: order
    });
    this.getTodosHandler(this.state.sortField, order);
  };

  getTodosHandler = (sortField, sortOrder) => {
    if (sortField === undefined || sortField === 'none') sortField = null;
    else if (sortOrder === 'desc') sortField = `-${sortField}`
    this.props.getTodos(1, sortField);
  };

  noDisplayHandler = (displayNoneTrigger) => {
    if(this.state.sortOrder === displayNoneTrigger) {
      return {
        'display': 'none'
      }
    }
  };

  render() {
    return (
      <>
        <div className="row my-1 mx-2 p-3 px-5 justify-content-end">
          <div className="col-auto d-flex align-items-center px-1 pr-3">
            <label className="text-secondary my-2 pr-2 view-opt-label">Sort</label>
  
            <select className="custom-select btn my-2" onChange={this.handleSelectChange}>
              <option value={null} defaultValue>none</option>
              {this.sortableFields.map((field, index) => {
                return (
                  <option key={`${field}-${index}`} value={field}>
                    {field}
                  </option>
                )
              })}
            </select>
  
            <i 
              className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" 
              data-toggle="tooltip" 
              data-placement="bottom"
              title="Ascending" 
              style={this.noDisplayHandler('asc')} 
              onClick={() => this.handleSortOrderChange('asc')}></i>

            <i 
              className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1" 
              data-toggle="tooltip"
              data-placement="bottom" 
              title="Descending" 
              style={this.noDisplayHandler('desc')} 
              onClick={() => this.handleSortOrderChange('desc')}></i>
          </div>
  
        </div>  
        <div className="mt-4 border-black-25 border-bottom"></div>
      </>
  
    );
  }
};