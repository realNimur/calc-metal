import React from 'react';
import styles from './styles.module.scss';
import cn from "classnames";
import {TagsParam, TState} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {changeMetal, resetOrder} from "../../redux/action";

const TagsItem = ({code, title}: TagsParam) => {
    const activeMetalCode = useSelector<TState, string>(state => state.order.metalCode);
    const dispatch = useDispatch();
    return (
        <li
            className={cn(styles["tags-item"], activeMetalCode === code && styles.active)}
            onClick={() => {
                dispatch(resetOrder());
                dispatch(changeMetal(code))
            }}
        >{title}
        </li>
    );
};

export default TagsItem;