import { combineReducers, createStore } from "@reduxjs/toolkit";


/***
 * Field user needs to have.
 * List of Items, cart Information(qnty, details), price.
 * order - [{
 * 	"name": ,
 * 	"toppings": [],
 * 	"size": ,
 * 	"qnty": ,
 * 	"total": ,
 *   "individual cost": 
 * }]
 */
const initialStateOfUser = {
	"Items": [],
	"VegItems":[],
	"NonVegItems":[],
	"IncreasingPrice":[],
	"IncreasingRating":[],
	"order": [],
}


const CentralReducer = (state=initialStateOfUser, action) => {
	switch (action.type) {
		case 'appendItemToList': {
			return {
				...state,
				Items: action.payload,
			}
		}
		case 'appendToVegList': {
			return {
				...state,
				VegItems: action.payload
			}
		}
		case 'appendToNonVegItems': {
			return {
				...state,
				NonVegItems: action.payload
			}
		}
		case 'appendToIncreasingPrice': {
			return {
				...state,
				IncreasingPrice: action.payload
			}
		}
		case 'appendToIncreasingRating': {
			return {
				...state,
				IncreasingRating: action.payload
			}
		}
		case 'appendToOrderList': {
			let newOrderList = [...state.order]
			newOrderList = [...newOrderList, action.payload]
			return{
				...state,
				order: [...newOrderList]
			}
		}
		case 'removeFromOrderList': {
			let newOrderList = [...state.order]
			newOrderList.splice(newOrderList.indexOf(action.payload), 1);
			return {
				...state,
				order: [...newOrderList]
			}
		}
		default: {
			return {
				...state
			}
		}
	}
	
}

const MainReducer = combineReducers({CentralReducer});
export const pizzaStore = createStore(MainReducer);