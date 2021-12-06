import React, {useEffect, useState} from 'react';
import cn from 'classnames';
import SelectItem from '../SelectItem';
import styles from './styles.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {setShowList} from "../../../redux/action";
import {itemInfo, TState} from "../../../types";

type SelectTagParams = {
    caption: string;
    selectItems: itemInfo[];
    type: string
}
const SelectTag = function SelectTag({caption, selectItems, type}: SelectTagParams) {
    const [selectText, setSelectText] = useState(caption);
    const dispatch = useDispatch();
    const activeList = useSelector<TState, string>(state => state.showList);

    const handleClickSelect = () => {
        if (type === activeList) {
            dispatch(setShowList(''));
        } else {
            dispatch(setShowList(type));
        }
    }

    useEffect(() => {
        setSelectText(caption)
    }, [caption])

    return (
        <div className={cn(styles.dropdown, activeList === type && styles.open)} onClick={handleClickSelect}>
            <div className={cn(styles.dropdown__header)}>
                <p className={styles.dropdown__caption}>{selectText}</p>
                <button type="button" className={styles.dropdown__btn}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="#D4D4D4" />
                    </svg>
                </button>
            </div>
            <ul
                className={cn(styles['dropdown-content'])}
            >
                {selectItems.map((item, index) => {
                        return (
                            <SelectItem
                                itemInfo={item}
                                type={type}
                                key={index}
                            />
                        )
                    }
                )}

            </ul>
        </div>
    );
};


export default SelectTag;
