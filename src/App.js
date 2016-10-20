import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';


const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
});

const mapActionsToProps = (dispatch) => bindActionCreators({
  // updateProduct: cartActions.updateProduct,
}, dispatch);

class App extends Component {
  static propTypes = {
    todos: PropTypes.array,
  };

  render() {
    return (
      <div>
        <h1>TODO List</h1>

        <ul>
          { this.props.todos.map((todo, i) => {
            return (
              <li key={i}>
                { todo.done && <span>[v]</span> }
                <span>{ todo.label }</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps, mapActionsToProps)
)(App);
