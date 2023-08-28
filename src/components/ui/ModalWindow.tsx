import { FunctionComponent } from 'react';

import styles from '../../style/ui/modalWindow.module.scss';

import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';

type ModalProps = {
  children: JSX.Element | JSX.Element[];
  modalToggler: () => void;
}

const ModalWindow:FunctionComponent<ModalProps> = (( {children, modalToggler} ) => {
  return (
    <div className={styles.blackout}>
      <div className={`${styles.flexColumn} ${styles.controls}`}>
        <div className={styles.flexColumn}>
          <Input 
            placeholder='Todo title...'
          />
          <TextArea 
            placeholder='Todo text...'
          />
        </div>
        {children}
        <Button 
          btnText='close window' 
          onClick={modalToggler}
        />
      </div>
    </div>
  );
});

export default ModalWindow;
