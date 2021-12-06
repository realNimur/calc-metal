import React from 'react';
import styles from './styles.module.scss';
import TagsItem from "../TagsItem";
import {useSelector} from "react-redux";
import {TagsParam, TState} from "../../types";

const Tags = () => {
    const tags = useSelector<TState, TagsParam[]>(state => state.metals);
    return (
        <ul className={styles["tags-list"]}>
            {tags.map((tag) => <TagsItem key={tag.code} code={tag.code} title={tag.title} />)}
        </ul>
    );
};

export default Tags;