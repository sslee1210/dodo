import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    // 배열안의 원소를 모두 제곱하기
    const numbers = [1, 2, 3, 4, 5];
    const squared = numbers.map((number) => number * number);
    console.log(numbers); // [1,4,9,16,25]

    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));

    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
