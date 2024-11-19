import { useReducer } from 'react'
import CardContext from './ctx-card'

const defaultCardValue = {
	items: [],
	totalAmount: 0,
}

const cardReducer = (state, action) => {
	if (action.type == 'ADD_ITEM') {
		const updatedItems = state.items.concat(action.item)
		const updatedTotal =
			state.totalAmount + action.item.price * action.item.amount

		return {
			items: updatedItems,
			totalAmount: updatedTotal,
		}
	}

	if (action.type == 'REMOVE_ITEM') {
		console.log('remove')
	}

	return defaultCardValue
}

const CardContextRouter = ({ children }) => {
	const [cardState, dispatchCardAction] = useReducer(
		cardReducer,
		defaultCardValue
	)

	const addItemHandler = item => {
		dispatchCardAction({
			type: 'ADD_ITEM',
			item: item,
		})
	}

	const removeItemHandler = id => {
		dispatchCardAction({
			type: 'REMOVE_ITEM',
			id: id,
		})
	}

	const initCardValue = {
		items: cardState.items,
		total: cardState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	}

	return (
		<CardContext.Provider value={initCardValue}>
			{children}
		</CardContext.Provider>
	)
}

export default CardContextRouter
