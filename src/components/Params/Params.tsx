import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import SelectTag from "../SelectElement/SelectTag";
import InputTag from "../InputTag";
import {useDispatch, useSelector} from "react-redux";
import {setWeight} from "../../redux/action";
import {MetalItem, PaymentsItem, TState} from "../../types";

const Params = () => {
    const dispatch = useDispatch();
    const [defaultTextFinenessSelect, setDefaultTextFinenessSelect] = useState('Проба металла');
    const [defaultTextPaymentSelect, setDefaultTextPaymentSelect] = useState('Способ выплаты');

    const currentTextWeightValue = useSelector<TState, string>(state => state.order.weight);
    const activeMetal = useSelector<TState, string>(state => state.order.metalCode);
    const activeFineness = useSelector<TState, number>(state => state.order.fineness.value);
    const activePayment = useSelector<TState, number | null>(state => state.order.paymentCode);
    const arrayPayment = useSelector<TState, PaymentsItem[]>(state => state.payments);
    const arrayMetal = useSelector<TState, MetalItem[]>(state => state.metals);

    const [listFineness] = arrayMetal.filter((metal) => metal.code === activeMetal);


    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setWeight(event.target.value.replace(/[a-zа-яё]/gi, '')));
    }

    useEffect(() => {
        setDefaultTextFinenessSelect('Проба металла');
        setDefaultTextPaymentSelect('Способ выплаты');
    }, [activeMetal]);

    useEffect(() => {
        if (activeFineness) {
            const [metalFromLocalStorage] = arrayMetal.filter((item) => item.code === activeMetal);
            const [finenessMetal] = metalFromLocalStorage.finenessList.filter((item) => item.id === activeFineness);
            setDefaultTextFinenessSelect(String(finenessMetal.value));
        }
        if (activePayment !== null) {
            const paymentValue = activePayment === 0 ? 'Наличные' : 'На расчётный счет';
            setDefaultTextPaymentSelect(paymentValue);
        }
        // eslint-disable-next-line
    }, [activePayment, activeFineness]);



    return (
        <div className={styles.params}>
            <p className={styles["params__caption"]}>Укажите<br />следующие параметры:</p>
            <SelectTag caption={defaultTextFinenessSelect} selectItems={listFineness.finenessList} type="fineness" />
            <SelectTag caption={defaultTextPaymentSelect} selectItems={arrayPayment} type="payment" />
            <InputTag placeholder="Вес металла (в граммах)" onChange={handleInput} value={currentTextWeightValue} />
        </div>
    );
};

export default Params;