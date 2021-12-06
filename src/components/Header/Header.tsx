import React from 'react';
import styles from './styles.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <p className={styles["header__caption"]}>Калькулятор</p>
        </header>
    );
};

export default Header;