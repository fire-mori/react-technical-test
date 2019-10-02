import { styled } from 'linaria/react'
import React from 'react'
import product from './classic-tee.jpg'
import { css } from 'linaria'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addItemToCart } from '../../actions/global/globalActions'

interface ProductDetailsProps {}

interface ProductDetailsState {
	activeSize: string
	price: number
	title: string
	image: string
}

class ProductDetails extends React.Component<
	ProductDetailsProps & typeof dispatchProps,
	ProductDetailsState
> {
	sizes = ['S', 'M', 'L']

	componentWillMount() {
		this.setState({
			activeSize: '',
			price: 75,
			title: 'Classic Tee',
			image: product,
		})
	}

	setActiveSize(size: string) {
		if (this.state.activeSize === size) {
			this.setState({ ...this.state, activeSize: '' })
		} else {
			this.setState({ ...this.state, activeSize: size })
		}
	}

	render() {
		return (
			<ProductDescription>
				<ImageContainer>
					<Image src={this.state.image}></Image>
				</ImageContainer>
				<DetailsContainer>
					<Tittle>{this.state.title}</Tittle>
					<Price>${this.state.price.toFixed(2)}</Price>
					<Description>
						Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco laboris nisi
						ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa{' '}
					</Description>
					<Size>Size</Size>
					<Sizes>
						{this.sizes.map(size => {
							return (
								<SizeSquare
									key={size}
									className={
										this.state.activeSize === size ? activeSize : ''
									}
									onClick={() => this.setActiveSize(size)}
								>
									{size}
								</SizeSquare>
							)
						})}
					</Sizes>
					<Button onClick={this.addToCart.bind(this)}>Add to cart</Button>
				</DetailsContainer>
			</ProductDescription>
		)
	}

	addToCart() {
		if (!this.state.activeSize) {
			alert('Please, select size') // ugly but working
			return
		}
		this.props.addItemToCart({
			count: 1,
			title: this.state.title,
			price: this.state.price,
			size: this.state.activeSize,
			image: this.state.image,
		})
	}
}

const ProductDescription = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-width: 1070px;
	flex-wrap: wrap;
	margin-top: 36px;
	width: 100%;
	@media (max-width: 900px) {
		flex-direction: column;
	}
`

const DetailsContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	max-width: 510px;
	padding: 0 50px;
	@media (max-width: 900px) {
		padding: 0 24px;
	}
`

const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	@media (max-width: 900px) {
		margin-bottom: 40px;
	}
`

const Image = styled.img`
	max-width: 400px;
	@media (max-width: 900px) {
		max-width: calc(100% - 48px);
	}
`
const Tittle = styled.div`
	font-size: 20px;
	color: #222222;
	margin-bottom: 30px;
`
const Price = styled.div`
	font-size: 14px;
	font-weight: bold;
	color: #222222;
	margin-bottom: 30px;
`
const Description = styled.div`
	font-size: 12px;
	color: #888888;
	margin-bottom: 30px;
`

const Sizes = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: baseline;
	align-content: stretch;
`

const Size = styled.div`
	font-size: 12px;
	font-weight: bold;
	color: #888888;
	margin-bottom: 12px;
	text-transform: uppercase;
	&::after {
		content: '*';
		color: #c90000;
	}
`
const SizeSquare = styled.div`
	border: 1px solid #cccccc;
	width: 40px;
	height: 40px;
	margin-right: 5px;
	font-size: 12px;
	line-height: 40px;
	text-align: center;
	color: #888888;
	margin-bottom: 22px;
	cursor: pointer;
`

const activeSize = css`
	border: 1px solid #222222;
	color: #222222;
`

const Button = styled.div`
	border: 2px solid #222222;
	height: 30px;
	width: 140px;
	line-height: 30px;
	text-align: center;
	font-weight: bold;
	font-size: 12px;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		color: #ffffff;
		background-color: #222222;
	}
`

const dispatchProps = {
	addItemToCart,
}

export default connect(
	null,
	dispatch => bindActionCreators(dispatchProps, dispatch),
)(ProductDetails)
