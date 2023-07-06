import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoApp extends Component {
  state = {
    todos: []
  };

  handleAddTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo]
    }));
  };

  handleDeleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id)
    }));
  };

  handleToggleTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    }));
  };

  render() {
    return (
      <>
        <TodoHeader />
        <TodoList todos={this.state.todos} onDelete={this.handleDeleteTodo} onToggle={this.handleToggleTodo} />
        <TodoForm onAdd={this.handleAddTodo} />
      </>
    );
  }
}

export default TodoApp;
