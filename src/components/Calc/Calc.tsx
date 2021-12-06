import React, {useEffect} from 'react';
import Params from "../Params";
import Tags from "../Tags";
import Total from "../Total";
import picture from './../../images/image-calc.jpg';
import styles from './styles.module.scss';
import {MetalItem, orderParams, TState} from "../../types";
import {changeMetal, setFineness, setPayMethod, setWeight} from "../../redux/action";
import {useDispatch, useSelector} from "react-redux";

const Calc = () => {
    const dispatch = useDispatch();
    const metalList = useSelector<TState, MetalItem[]>(state => state.metals);
    useEffect(() => {
        const resultFromLocalStorage = localStorage.getItem('result');
        if (resultFromLocalStorage) {
            const {weight, metalCode, fineness, paymentCode}: orderParams = JSON.parse(resultFromLocalStorage);
            const [metalFromLocalStorage] = metalList.filter((item) => item.code === metalCode);
            const [finenessMetal] = metalFromLocalStorage.finenessList.filter((item) => item.id === fineness.value);
            dispatch(setWeight(weight));
            dispatch(setPayMethod(paymentCode));
            dispatch(changeMetal(metalCode));
            dispatch(setFineness(finenessMetal.id, [finenessMetal.cash, finenessMetal.checkingAccount]));
        }
       // eslint-disable-next-line
    }, [])
    return (
        <div className={styles.calc}>
            <div className={styles["calc-right"]}>
                <img src={picture} alt="gold" />
            </div>
            <div className={styles["calc-left"]}>
                <Tags />
                <Params />
                <Total />
            </div>
        </div>
    );
};

export default Calc;