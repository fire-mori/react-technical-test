import { styled } from 'linaria/react'
import React from 'react'
import { connect } from 'react-redux'
import { Item } from 'actions/global/globalActionTypes'

interface CartPopUpProps {
	left: string
	display: string
	items?: Item[]
}
interface CartPopUpState {
	popupLeft: string
}

class CartPopUp extends React.Component<CartPopUpProps, CartPopUpState> {
	componentWillMount() {
		this.setState({
			popupLeft: '',
		})
	}

	render() {
		const items = this.props.items || []
		if (items.length === 0) {
			// ideally should be in a separate function
			return (
				<CartDetails
					style={{ display: this.props.display, left: this.props.left }}
				>
					<NothingMessage>Nothing here...</NothingMessage>
				</CartDetails>
			)
		}
		return (
			<CartDetails
				style={{ display: this.props.display, left: this.props.left }}
			>
				{items.map((item, index) => {
					return (
						<ItemContainer key={index}>
							<ItemImage>
								<img src={item.image} alt="" />
							</ItemImage>
							<ItemDescription>
								<div>{item.title}</div>
								<div>
									{item.count}x <Price>${item.price.toFixed(2)}</Price>
								</div>
								<div>Size: {item.size}</div>
							</ItemDescription>
						</ItemContainer>
					)
				})}
			</CartDetails>
		)
	}
}

const CartDetails = styled.div`
	position: absolute;
	width: 295px;
	max-height: 280px;
	overflow-y: auto;
	overflow-x: hidden;
	top: 30px;
	display: none;
	background-color: #fff;
	padding-top: 10px;
	border: 1px solid #ccc;
`

const ItemContainer = styled.div`
	display: flex;
	width: 100%;
	padding: 10px 20px;
`

const ItemImage = styled.div`
	width: 70px;
	overflow: hidden;

	img {
		width: 100%;
	}
`

const ItemDescription = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 12px;
	font-family: Helvetica, Arial, sans-serif;
	padding: 0 20px;
	line-height: 30px;
`

const Price = styled.span`
	font-weight: bold;
`

const NothingMessage = styled.div`
	font-size: 12px;
	padding: 10px 20px 20px 20px;
`

export default connect(
	(state: any) => {
		console.log(state)
		return {
			items: state.global.items,
		}
	},
	null,
)(CartPopUp)
