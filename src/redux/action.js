export const CHANGE_METAL = 'CHANGE_METAL';
export const SET_WEIGHT = 'SET_WEIGHT';
export const SET_PAY_METHOD = 'SET_PAY_METHOD';
export const SET_FINENESS = 'SET_FINENESS';
export const SHOW_LIST = 'SHOW_LIST';
export const RESET_ORDER = 'RESET_ORDER';

export const changeMetal = (nameMetal) => ({ type: CHANGE_METAL, payload: nameMetal });
export const setWeight = (value) => ({ type: SET_WEIGHT, payload: value });
export const setPayMethod = (method) => ({ type: SET_PAY_METHOD, payload: method });
export const setFineness = (fineness, price) => ({ type: SET_FINENESS, payload: { value: fineness, price } });
export const setShowList = (type) => ({ type: SHOW_LIST, payload: type });
export const resetOrder = () => ({ type: RESET_ORDER });