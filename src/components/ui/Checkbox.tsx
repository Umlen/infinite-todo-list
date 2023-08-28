import { FunctionComponent, ComponentPropsWithoutRef } from 'react';

import styles from '../../style/ui/input.module.scss';

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
  id: string;
};

const Checkbox: FunctionComponent<CheckboxProps> = ( {id, ...props} ) => {
  return (
    <>
      <input 
        {...props} 
        className={styles.checkbox}
        type='checkbox'
        id={`checkbox-${id}`}
      />
      <label htmlFor={`checkbox-${id}`} className={styles.checkboxLabel} />
    </>
  );
};

export default Checkbox;
