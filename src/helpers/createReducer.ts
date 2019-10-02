import { Reducer } from 'redux'

import RootActions from 'actions'

export default function createReducer<T>(name: string, defaultState: T) {
	return <A extends RootActions>(callback: (state: T, action: A) => T) => {
		const reducer: Reducer<T, A> = (
			previousState = defaultState as T,
			action: A,
		) => callback(previousState, action)
		return Object.defineProperty(reducer, 'name', {
			value: `${name}Reducer`,
			configurable: true,
		}) as typeof reducer
	}
}
