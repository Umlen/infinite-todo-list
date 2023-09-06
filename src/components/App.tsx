import { FunctionComponent, useState } from 'react';

import todos from '../store/todos';

import Button from './ui/Button';
import Header from './ui/Header';
import Footer from './ui/Footer';
import ModalWindow from './ui/ModalWindow';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails';

const App:FunctionComponent = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  function modalWindowToggler() {
    setIsModalShown(prevModalState => !prevModalState);
  }

  return (
    <>
      <Header modalToggler={modalWindowToggler} />
      <main className='container main'>
        {
          isModalShown && 
            <ModalWindow modalToggler={modalWindowToggler}>
              <Button 
                btnText='add todo' 
                onClick={() => todos.addTask()}
              />
            </ModalWindow>
        }
        <TodoList />
        <TodoDetails />
      </main>
      <Footer />
    </>
  );
};

export default App;
