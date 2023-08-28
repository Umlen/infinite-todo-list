import { FunctionComponent, ComponentPropsWithoutRef } from 'react';

import styles from '../../style/ui/input.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {};

const Input: FunctionComponent<InputProps> = ( {...props} ) => {
  return (
    <input 
      {...props} 
      className={styles.input} 
      type='text'
    />
  );
};

export default Input;
