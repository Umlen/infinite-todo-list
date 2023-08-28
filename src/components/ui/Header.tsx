import { FunctionComponent } from 'react';

import logo from '../../assets/images/logo.svg';
import addIcon from '../../assets/icons/add.svg';

import styles from '../../style/ui/header.module.scss';

type HeaderProps = {
  modalToggler: () => void;
}

const Header: FunctionComponent<HeaderProps> = ( {modalToggler} ) => {
  return (
    <header className={`container ${styles.header}`}>
      <img src={logo} alt='logo' className={styles.logo} />
      <h1 className='largeHeader'>ToDo List</h1>
      <img 
        src={addIcon} 
        onClick={modalToggler}
        alt='add todo icon' 
        className={styles.addIcon} 
        tabIndex={0}
      />
    </header>
  );
};

export default Header;
