import themes from 'themes'

import Action from '../Action'

export const PERSIST_THEME = 'PERSIST_THEME'
export interface PersistTheme extends Action<typeof PERSIST_THEME> {
	name: keyof typeof themes
}

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export interface AddItemToCart extends Action<typeof ADD_ITEM_TO_CART> {
	item: Item
}

export interface Item {
	title: string
	count: number
	price: number
	size: string
	image: string
}

export type GlobalActions = PersistTheme | AddItemToCart
