import React from 'react'
import styled from 'styled-components'

import StyledTitle from '../atoms/MainTitle'
import MainSlide from '../molecules/MainSlide'
import images from '../assets/images'
import Container from '../atoms/Container'
import ClearAllBlock from '../molecules/ClearAllBlock'
import CardFlex from '../organisms/CardFlex'
import { ILaunch } from '../Types/Types'

interface IFavouritesTemplateProps {
	clearAll: () => void
	favourites: ILaunch[]
	onDelete: (id: string) => void
}

const FavouritesWrapper = styled.div`
	position: relative;
	z-index: 3;
	background-color: white;
	padding-bottom: 40px;
`

const Overflow = styled.div`
	max-height: 50vh;
	overflow: hidden;
	position: relative;
`

const FavouritesTemplate: React.FC<IFavouritesTemplateProps> = ({
	clearAll,
	favourites,
	onDelete,
}) => {
	return (
		<div>
			<Overflow>
				<StyledTitle>
					<p>favourites</p>
				</StyledTitle>
				<MainSlide src={images[2]} />
			</Overflow>
			<FavouritesWrapper>
				<Container>
					<ClearAllBlock onClearAll={clearAll} />
					<CardFlex images={images} data={favourites} onClick={onDelete} />
				</Container>
			</FavouritesWrapper>
		</div>
	)
}

export default FavouritesTemplate
