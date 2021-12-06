import React from 'react';
import styles from './styles.module.scss';
import {setFineness, setPayMethod} from "../../../redux/action";
import {useDispatch} from "react-redux";
import {itemInfo} from '../../../types';

type SelectItemParam = {
    type: string;
    itemInfo: itemInfo
}
const SelectItem = function SelectItem({type, itemInfo}: SelectItemParam) {
    const dispatch = useDispatch();
    const {title, code, value, id, cash, checkingAccount} = itemInfo;

    return (
        <button
            type="button"
            className={styles['dropdown-content__item']}
            onClick={() => {
                const prices = [cash, checkingAccount];
                if (type === 'fineness' && id && prices) {
                    dispatch(setFineness(id, prices))
                } else if (type === 'payment' && code) {
                    let codeInitial = 1;
                    if (code === 'cash') codeInitial = 0;
                    dispatch(setPayMethod(codeInitial))
                }
            }}
        >
            {title ? title : value}
        </button>
    );
};

export default SelectItem;
