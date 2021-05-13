import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './todo-app-components/TodoTemplate'
import TodoInsert from './todo-app-components/TodoInsert'
import TodoList from './todo-app-components/TodoList'

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `todo ${i}`,
      checked: false,
    })
  }
  return array;
}

const App = () => {
  // const [todos, setTodos] = useState(createBulkTodos)
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn Sass',
      checked: true,
    },
    {
      id: 2,
      text: 'Learn Javascript',
      checked: true,
    },
    {
      id: 3,
      text: 'Learn React',
      checked: false
    }
  ]);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      }
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  )

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }, [todos])

  const onToggle = useCallback(id => {
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
  }, [todos])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
};

export default App;