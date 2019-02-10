// eslint-disable-next-line
import React, { Component } from 'react';
import saber from '../../assets/images/jedi-saber.png';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  render() {
    return (
      <div className="todo">
        <h1 className="todo__title">imperial todo</h1>
        <form onSubmit={this.handleSubmit} className="todo__form">
          <label htmlFor="new-todo">What needs to be done?</label>
          <div>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>Add #{this.state.items.length + 1}</button>
          </div>
        </form>
        <TodoList items={this.state.items} handleRemove={this.handleRemove} />
      </div>
    );
  }

  handleRemove(idToBeDeleted) {
    this.setState(state => ({
      items: state.items.filter(elem => elem.id !== idToBeDeleted)
    }));
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <div key={item.id}>
            {item.text}
            <img
              src={saber}
              alt="jedi saber"
              width="20"
              onClick={() => {
                this.props.handleRemove(item.id);
              }}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default TodoApp;
