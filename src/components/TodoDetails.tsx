import { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';

import styles from '../style/todos.module.scss';

import todos from '../store/todos';

const TodoDetails:FunctionComponent = observer(() => {
  return (
    <>
      {
        todos.activeTask &&
          <div className={styles.todoDetails}>
            <h2 className='bigHeader'>Task Info</h2>
            <h3 className='midHeader'>{todos.activeTask.title}</h3>
            <p>{todos.activeTask.text}</p>
          </div>
      }
    </>
  );
});

export default TodoDetails;
