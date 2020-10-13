export const initialState = {
	basket: [],
	user: null,
};

export function reducer(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			// logic for adding item to basket
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case 'REMOVE_FROM_BASKET':
			//logic for removing item from basket
			break;

		default:
			return state;
	}
}
