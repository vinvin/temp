import React, { Component } from 'react';
import AddTodo from './lib/containers/AddTodo';
import VisibleTodoList from './lib/containers/VisibleTodoList';
import Footer from './lib/components/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <h1>TODO List</h1>

        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
