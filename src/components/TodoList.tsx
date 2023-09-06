import { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';

import styles from '../style/todos.module.scss';

import todos from '../store/todos';

import TodoItem from './TodoItem';

const TodoList:FunctionComponent = observer(() => {
  return (
    <div className={styles.todoList}>
      {
        todos.todoArray.map(todoItem => 
          <TodoItem 
            key={todoItem.id} 
            todoItem={todoItem} 
          />
        )
      }
    </div>
  );
});

export default TodoList;
