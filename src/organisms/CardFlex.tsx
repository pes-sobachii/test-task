import React from 'react'
import styled from 'styled-components'

import { ILaunch } from '../Types/Types'
import Card from '../molecules/Card'

interface ICardFlexProps {
	images: string[]
	data: ILaunch[]
	onClick: (id: string) => void
}

const StyledFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	div {
		flex: 0 0 31%;
	}
`

const CardBorder = styled.div`
	border: 1px solid #d3eaff;
	min-height: 520px;
`

const CardFlex: React.FC<ICardFlexProps> = ({ data, onClick, images }) => {
	return (
		<StyledFlex>
			{data.slice(-3).map((launch: ILaunch, index: number) => {
				return (
					<Card
						onClick={onClick}
						data={launch}
						photo={images[index]}
						type={'favourite'}
					/>
				)
			})}
			{data.length < 3 &&
				[...new Array(3 - data.length)].map((item: undefined) => (
					<CardBorder />
				))}
		</StyledFlex>
	)
}

export default CardFlex
