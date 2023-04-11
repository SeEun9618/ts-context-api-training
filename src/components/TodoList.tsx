import React from 'react';
import TodoItem from './TodoItem';

function TodoList () {
    const todos = [
        {
          id: 1,
          text: 'Context Api 배우기',
          done: true,
        },
        {
            id: 2,
            text: 'TypeScript 마스터하기',
            done: true,
        },
        {
            id: 3,
            text: 'TypeScript와 Context Api 적용해보기',
            done: false,
        },
    ];

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    );
}

export default TodoList;