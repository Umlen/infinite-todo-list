import { FunctionComponent, ComponentPropsWithoutRef } from 'react';

import styles from '../../style/ui/input.module.scss';

interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {};

const TextArea: FunctionComponent<TextAreaProps> = ( {...props} ) => {
  return (
    <textarea {...props} className={`${styles.input} ${styles.textarea}`} />
  );
};

export default TextArea;
