import React from 'react';
import Input from './Input';
import Filters from './Filters';
import List from './TodoList';
import Pagination from './Pagination';

import { getTodos, createTodo, deleteTodo, editTodo } from '../services/services';


export default class App extends React.Component {
  getTodos = (page = this.state.currentPage, sort = this.state.currentSortField) => {
    getTodos(page, sort)
      .then(data => {
        this.setState({
          todoList: data.data || [],
          currentPage: page,
          currentSortField: sort,
          totalPages: data.totalPages
        });
      });
  };

  addTodo = (todoName) => {
    createTodo({ name: todoName })
      .then(data => {
        this.getTodos(this.state.currentPage);
      });
  };

  removeTodo = (todoId) => {
    deleteTodo(todoId)
      .then(response => {
        this.getTodos(this.state.currentPage);
      });
  };

  editTodo = (todoId, data, callback) => {
    editTodo(todoId, data)
      .then(() => {
        if (callback) {
          callback();
        }
      });
  };

  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      currentPage: 1,
      currentSortField: undefined,
      totalPages: 0
    };
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    return (
      <div>
        <Input addTodo={this.addTodo} />
        <Filters getTodos={this.getTodos} />
        <List
          todoList={this.state.todoList}
          editTodo={this.editTodo}
          removeTodo={this.removeTodo}
          getTodos={this.getTodos} />
        <Pagination getTodos={this.getTodos} totalPages={this.state.totalPages} currentPage={this.state.currentPage}/>
      </div>
    );
  }
};
