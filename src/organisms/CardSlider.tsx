import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import styled from 'styled-components'
import * as ReactDOMServer from 'react-dom/server'

import 'swiper/css'
import 'swiper/css/navigation'

import Container from '../atoms/Container'
import Card from '../molecules/Card'
import PaginationCircle from '../atoms/PaginationCircle'
import { ILaunch } from '../Types/Types'
import Heading from '../atoms/Heading'
import SliderButtons from '../molecules/SliderButtons'

interface ICardSliderProps {
	images: string[]
	data: ILaunch[]
	onLike: (id: string) => void
}

const StyledDiv = styled.div`
	padding: 40px 0;
	position: relative;

	.swiper-pagination-bullet-active div {
		background: black;
	}

	.swiper {
		display: flex;
		flex-direction: column-reverse;
		padding: 50px 0;
	}
`

const CardSlider: React.FC<ICardSliderProps> = (props) => {
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return ReactDOMServer.renderToStaticMarkup(
				<PaginationCircle color={'black'} className={className}>
					{<div />}
				</PaginationCircle>
			)
		},
	}

	return (
		<StyledDiv>
			<Container>
				<div>
					<Swiper
						modules={[Navigation, Pagination]}
						slidesPerView={3}
						spaceBetween={30}
						pagination={pagination}
						navigation={{
							prevEl: '.prevEl',
							nextEl: '.nextEl',
						}}
						className='mySwiper'
					>
						<Heading>
							<p>popular tours</p>
							<SliderButtons />
						</Heading>
						{props?.data.map((launch: ILaunch, index: number) => {
							const photo = !(index % 3) ? 2 : !(index % 2) ? 1 : 0
							return (
								<SwiperSlide key={index}>
									<Card
										onClick={props.onLike}
										data={launch}
										photo={props.images[photo]}
										type={'default'}
									/>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</Container>
		</StyledDiv>
	)
}

export default CardSlider
