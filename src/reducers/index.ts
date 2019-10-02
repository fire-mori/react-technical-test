import { combineReducers } from 'redux'
import global from './global'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export default combineReducers({
	global,
	router: connectRouter(history),
})
