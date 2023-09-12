import { FunctionComponent, ComponentPropsWithoutRef } from 'react';

import styles from '../../style/ui/input.module.scss';

const TextArea: FunctionComponent< ComponentPropsWithoutRef<'textarea'> > = ( {...props} ) => {
  return (
    <textarea {...props} className={`${styles.input} ${styles.textarea}`} />
  );
};

export default TextArea;
