import { FunctionComponent, ComponentPropsWithoutRef } from 'react';

import styles from '../../style/ui/button.module.scss';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  btnText: string;
};

const Button: FunctionComponent<ButtonProps> = ( {btnText, ...props} ) => {
  return (
    <button {...props} className={styles.button}>
      {btnText}
    </button>
  );
};

export default Button;
