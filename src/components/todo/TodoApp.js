// eslint-disable-next-line
import React, { Component } from 'react';
import Music from '../../components/Music';

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
        <div className="todo__bg" />
        <h1 className="todo__title">imperial todo</h1>
        <form onSubmit={this.handleSubmit} className="todo__form">
          <label htmlFor="new-todo" />
          <div>
            <input
              className="todo__input"
              placeholder="What needs to be done?"
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button className="todo__btn">
              <span>mission {this.state.items.length + 1}</span>
            </button>
          </div>
        </form>
        <TodoList items={this.state.items} handleRemove={this.handleRemove} />
        <Music />
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
      <div style={{ zIndex: 3 }}>
        {this.props.items.map(item => (
          <div className="todo__item" key={item.id}>
            <span>{item.text}</span>
            <div
              className="todo__item todo__item--remove"
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
