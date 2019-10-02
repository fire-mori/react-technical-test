import ThemeContext from 'react-theme-context'

import light from './light'

/**
 * A singleton class for storing the app ThemeContext.
 */
export default class AppTheme {
	private static _context: ThemeContext<typeof light>
	/* istanbul ignore next */
	private constructor() {}
	public static context(initialTheme = light) {
		return this._context || (this._context = new ThemeContext(initialTheme))
	}
}
