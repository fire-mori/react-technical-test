import { RouteComponentProps } from '@reach/router'
import React, { FC } from 'react'
import { RawIntlProvider } from 'react-intl'
import AppBar from 'components/AppBar'
import { createIntl } from 'helpers/intl'
import Locale from 'models/Locale'
import AppTheme from 'themes/AppTheme'

import LayoutStyles from './Layout.styles'
import { styled } from 'linaria/react'

export interface LayoutProps extends RouteComponentProps {
	locale?: Locale
}

const Layout: FC<LayoutProps> = ({ children, locale = 'en' }) => {
	AppTheme.context().useLayoutEffect({
		classNames: [LayoutStyles],
	})
	return (
		<PageWrapper>
			<PageContainer>
				<RawIntlProvider value={createIntl(locale)}>
					<AppBar></AppBar>
					{/* <Nav /> */}
					{children}
				</RawIntlProvider>
			</PageContainer>
		</PageWrapper>
	)
}

export default Layout

const PageWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	font-family: Helvetica, Arial, sans-serif;
`

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 100%;
	max-width: 1440px;
`
