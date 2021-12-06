import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {orderParams, TState} from "../../types";

const Total = () => {
    const [isDisabledButton, setDisabledButton] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const activeMetal = useSelector<TState, string>(state => state.order.metalCode);
    const order = useSelector<TState, orderParams>(state => state.order);
    const {paymentCode, fineness, weight} = order;

    useEffect(() => {
        for (const argumentsKey in order) {
            if (order[argumentsKey] === null || order[argumentsKey] === '') {
                setTotalCount(0);
                setDisabledButton(true);
                return;
            }
        }
        setDisabledButton(false);
    }, [order])
    return (
        <div className={styles.total}>
            <p className={styles["total-text"]}>Итого: <span
                className={styles["total-text__value"]}>{totalCount > 0 && totalCount}</span></p>
            <button
                disabled={isDisabledButton}
                type={"button"}
                className={styles["total__button"]}
                onClick={() => {
                    if (paymentCode !== null) {
                        setTotalCount(fineness.price[paymentCode] * Number(weight));
                        localStorage.setItem('result', JSON.stringify({
                            metalCode: activeMetal,
                            paymentCode,
                            fineness,
                            weight
                        }));
                    }

                }}
            >
                Рассчитать
            </button>
        </div>
    );
};

export default Total;