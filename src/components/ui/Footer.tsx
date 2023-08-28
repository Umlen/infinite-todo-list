import { FunctionComponent } from 'react';

import styles from '../../style/ui/footer.module.scss';

const Footer: FunctionComponent = () => {
  return (
    <footer className={`container ${styles.footer}`}>
      <p>Made by Viktor P. © 2023</p>
    </footer>
  );
};

export default Footer;
