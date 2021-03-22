import React from 'react';
import './template.css';
import Title from './components/title/title';
import Filter from './components/filters/filter';
import ListItem from './components/todo-list/list-item';
import Create from './components/create/create';
import _findIndex from 'lodash/findIndex';
import _map from 'lodash/map';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {id: 1, name: 'Test todo 1', completed: false},
                {id: 2, name: 'Test todo 2', completed: false},
                {id: 3, name: 'Test todo 3', completed: true},
                {id: 4, name: 'Test todo 4', completed: true},
                {id: 5, name: 'Test todo 5', completed: false},
                {id: 6, name: 'Test todo 6', completed: true},
                {id: 7, name: 'Test todo 7', completed: false}
            ],
            filter: 'SHOW_ALL',
        };
    }

    countUncompletedTodo() {
        let todos = this.state.todos;
        return todos.filter(t => !t.completed).length;
    }

    changeFilter(filter) {
      this.setState({filter});
    }

    filterTodo() {
        const {todos, filter} = this.state;

        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'COMPLETED': 
                return todos.filter(t => t.completed);
            case 'UNCOMPLETED': 
                return todos.filter(t => !t.completed);
        }
    }

    // find checkbox and update it
    handleCheckBox(id) {
      const todos = this.state.todos;
      let index = _findIndex(todos, {id});
      if (index !== -1) {
          let todo = todos[index];
          todo.completed = !todo.completed;
          todos[index] = todo;
          this.setState({todos});
      }
    }

    handleRemove(id) {
      const todos = this.state.todos;
      let left = todos.filter(t => t.id !== id);
      this.setState({todos: left});
    }

    addTodo(newName) {
      let todos = this.state.todos;
      let ids = _map(todos, 'id');
      let max = Math.max(...ids);
      todos.push({
        id: max+1,
        name: newName,
        completed: false,
      });

      this.setState({
        todos: todos,
      });
      if (this.state.filter === 'COMPLETED') {
        this.changeFilter('UNCOMPLETED');
      }
    }

    render() {
        return (
            <div data-reactroot="" className="app__content">
                <div className="app__header"></div>
                <div className="app__body">
                    <Title unCompleted={this.countUncompletedTodo()} />
                    <Filter onChangeFilter={(filter) => this.changeFilter(filter)} type={this.state.filter} />
                    <ListItem listItems={this.filterTodo()} handleCheckBox={(id) => this.handleCheckBox(id)} removeTodo={(id) => this.handleRemove(id)} />
                    <Create addTodo={(name) => this.addTodo(name)} />
                </div>
            </div>
        );
    }
}

export default App;
