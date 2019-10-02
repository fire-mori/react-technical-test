import { styled } from 'linaria/react'
import React from 'react'
import CartPopUp from 'components/CartPopUp'
import { connect } from 'react-redux'
import { Item } from 'actions/global/globalActionTypes'

interface AppBarProps {
	items?: Item[]
}
interface AppBarState {
	popupLeft: string
}

class AppBar extends React.Component<AppBarProps, AppBarState> {
	constructor(props: AppBarProps) {
		super(props)
		this.state = {
			popupLeft: '',
		}
	}

	render() {
		return (
			<Navigation>
				<CartPopUp
					left={this.state.popupLeft}
					display={this.state.popupLeft === '' ? 'none' : 'block'}
				></CartPopUp>
				<Cart>
					<TextCart onClick={this.showCartPopup.bind(this)}>
						My cart ( {this.props.items ? this.props.items.length : 0} )
					</TextCart>
					<IconCart></IconCart>
				</Cart>
			</Navigation>
		)
	}

	showCartPopup(event: React.MouseEvent) {
		if (this.state.popupLeft) {
			this.setState({
				popupLeft: '',
			})
			return
		}
		const target = event.target as HTMLElement
		const rect = target.getBoundingClientRect()
		const popupWidth = 295
		let popupLeft = `${rect.left - popupWidth + rect.width}px`
		console.log(popupLeft)
		this.setState({
			popupLeft,
		})
	}
}

const Navigation = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #f6f6f7;
	font-size: calc(10px + 2vmin);
	width: 100%;
`
const Cart = styled.div`
	text-align: right;
	background-color: #f6f6f7;
	line-height: 30px;
	width: 100%;
	max-width: 1070px;
	font-size: 11px;
	height: 30px;
	margin: 0 30px 0 30px;
`
const IconCart = styled.div`
	display: none;
	margin-right: 160px;
`

const TextCart = styled.span`
	display: inline-block;
	cursor: pointer;
`

export default connect(
	(state: any) => {
		return {
			items: state.global.items,
		}
	},
	null,
)(AppBar)
