import { createStore } from 'redux';
import { CHANGE_METAL, RESET_ORDER, SET_FINENESS, SET_PAY_METHOD, SET_WEIGHT, SHOW_LIST } from './action';

const defaultState = {
	showList: '',
	order: {
		metalCode: 'gold',
		paymentCode: null,
		fineness: {
			value: null,
			price: null,
		},
		weight: '',
	},
	metals: [
		{
			code: 'gold',
			title: 'Золото',
			finenessList: [
				{
					id: 1,
					value: 375,
					cash: 90,
					checkingAccount: 100
				},
				{
					id: 2,
					value: 575,
					cash: 190,
					checkingAccount: 250
				},
				{
					id: 3,
					value: 777,
					cash: 290,
					checkingAccount: 350
				}
			]
		},
		{
			code: 'silver',
			title: 'Серебро',
			finenessList: [
				{
					id: 1,
					value: 375,
					cash: 90,
					checkingAccount: 100
				},
				{
					id: 2,
					value: 575,
					cash: 190,
					checkingAccount: 250
				},
				{
					id: 3,
					value: 666,
					cash: 290,
					checkingAccount: 350
				}
			]
		},
		{
			code: 'palladium',
			title: 'Паладий',
			finenessList: [
				{
					id: 1,
					value: 375,
					cash: 90,
					checkingAccount: 100
				},
				{
					id: 2,
					value: 575,
					cash: 190,
					checkingAccount: 250
				},
				{
					id: 3,
					value: 888,
					cash: 290,
					checkingAccount: 350
				}
			]
		},
		{
			code: 'platinum',
			title: 'Платина',
			finenessList: [
				{
					id: 1,
					value: 375,
					cash: 90,
					checkingAccount: 100
				},
				{
					id: 2,
					value: 575,
					cash: 190,
					checkingAccount: 250
				},
				{
					id: 3,
					value: 999,
					cash: 290,
					checkingAccount: 350
				}
			]
		},
	],
	payments: [
		{
			code: 'cash',
			title: 'Наличные'
		},
		{
			code: 'checkingAccount',
			title: 'На расчётный счёт'
		}
	]
};
const reducer = (state = defaultState, { type, payload }) => {
	switch (type) {

		case SET_WEIGHT: {
			return {
				...state,
				order: {
					...state.order,
					weight: payload
				}
			};
		}
		case CHANGE_METAL: {
			return {
				...state,
				order: {
					...state.order,
					metalCode: payload
				}
			};
		}
		case SET_PAY_METHOD: {
			return {
				...state,
				order: {
					...state.order,
					paymentCode: payload
				}
			};
		}
		case SET_FINENESS: {
			return {
				...state,
				order: {
					...state.order,
					fineness: {
						value: payload.value,
						price: payload.price
					}
				}
			};
		}
		case SHOW_LIST: {
			return {
				...state,
				showList: payload
			};
		}
		case RESET_ORDER: {
			return {
				...state,
				showList: '',
				order: {
					...state.order,
					paymentCode: null,
					fineness: {
						value: null,
						price: null
					},
					weight: '',
				}
			};
		}

		default:
			return state;
	}
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;