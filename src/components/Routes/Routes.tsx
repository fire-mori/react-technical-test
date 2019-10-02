import React, { FC } from 'react'
import Home from 'components/Home'
import Layout from 'components/Layout'
import { ConnectedRouter } from 'connected-react-router'
import { history } from 'reducers'

const Routes: FC = () => {
	return (
		<ConnectedRouter history={history}>
			<Layout>
				<Home path="/" />
			</Layout>
		</ConnectedRouter>
	)
}

export default Routes
