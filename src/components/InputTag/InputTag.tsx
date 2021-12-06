import React from 'react';
import styles from './styles.module.scss';

type InputTagParam = {
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
}

const InputTag = ({placeholder, onChange, value}: InputTagParam) => {
    return (
        <input
            type="text"
            className={styles["input"]}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
};

export default InputTag;