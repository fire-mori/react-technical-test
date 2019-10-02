import { types } from 'actions/global'
import createReducer from 'helpers/createReducer'
import { Item } from 'actions/global/globalActionTypes'

const defaultState = {
	items: [],
}

export default createReducer('global', defaultState)(
	(state, action: types.GlobalActions): any => {
		switch (action.type) {
			case types.ADD_ITEM_TO_CART:
				const items = [...state.items] as Item[]
				items.push(action.item)
				return { ...state, items }
			default:
				return { ...state }
		}
	},
)
