import { RouteComponentProps } from '@reach/router'
import { styled } from 'linaria/react'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { injectIntl, IntlShape } from 'react-intl'
import { connect } from 'react-redux'
import ProductDetails from 'components/ProductDetails'

export interface HomeProps extends RouteComponentProps {}

const Home: React.FC<HomeProps & { intl: IntlShape }> = ({ intl }) => {
	return (
		<Root>
			<Helmet>
				<title>
					{intl.formatMessage({
						id: 'nav.home',
						defaultMessage: 'Home',
					})}
				</title>
			</Helmet>
			<Header>
				<ProductDetails></ProductDetails>
			</Header>
		</Root>
	)
}

export default connect(null)(injectIntl(Home))

const Root = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: stretch;
	align-content: center;
	width: 100%;
`

const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	width: 100%;
`
