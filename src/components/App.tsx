import { FunctionComponent, useState } from 'react';

import Header from './ui/Header';
import Footer from './ui/Footer';
import Button from './ui/Button';
import ModalWindow from './ui/ModalWindow';

const App: FunctionComponent = () => {
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
              />
            </ModalWindow>
        }
      </main>
      <Footer />
    </>
  );
};

export default App;
