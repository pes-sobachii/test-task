import React from 'react'
import styled from 'styled-components'

import ButtonsBlock from '../atoms/ButtonsBlock'
import Button from '../atoms/Button'
import Heart from '../assets/icons/Heart.png'
import Delete from '../assets/icons/Delete.svg'
import { ILaunch } from '../Types/Types'

const CardWrapper = styled.div`
	border: 1px solid #d3eaff;
	text-align: center;
	img {
		width: 100%;
		object-fit: cover;
	}
`

const CardButtons = styled(ButtonsBlock)`
	width: 100%;
	justify-content: center;
	button:nth-child(1) {
		flex: 1 1 auto;
	}
`

const CardInfo = styled.div`
	padding: 32px;

	h3 {
		text-transform: uppercase;
		font-weight: 700;
		font-size: 24px;
		line-height: 29px;
		margin-bottom: 16px;
		transform: scaleX(1.2);
	}
	p {
		font-family: 'Lato', sans-serif;
		color: #556b84;
		font-weight: 300;
		font-size: 24px;
		margin-bottom: 64px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		min-height: 80px;
		max-width: 100%;
	}
`

interface ICardProps {
	data: ILaunch
	photo: string
	onClick: (id: string) => void
	type: 'default' | 'favourite'
}

const Card: React.FC<ICardProps> = ({ photo, data, type, onClick }) => {
	return (
		<CardWrapper>
			<img src={photo} alt='poster' />
			<CardInfo>
				<h3>{data.mission_name}</h3>
				<p>{data.details || 'no data'.toUpperCase()}</p>
				<CardButtons gap={'16px'}>
					<Button bgcolor={'#D3EAFF'} py={'12px'}>
						Buy
					</Button>
					<Button
						bgcolor={'#ECECEC'}
						py={'12px'}
						px={'12px'}
						onClick={() => onClick(data.id)}
					>
						<img src={type === 'default' ? Heart : Delete} alt={'Favourites'} />
					</Button>
				</CardButtons>
			</CardInfo>
		</CardWrapper>
	)
}

export default Card
