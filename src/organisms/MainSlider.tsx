import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as ReactDOMServer from 'react-dom/server'
import { Pagination, Autoplay } from 'swiper'
import styled from 'styled-components'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import Title from '../atoms/Title'
import PaginationCircle from '../atoms/PaginationCircle'
import MainSlide from '../molecules/MainSlide'
import Anchor from '../atoms/Anchor'

interface ISliderProps {
	images: string[]
	scrollDown: () => void
}

const SliderWrapper = styled.div`
	position: relative;
	.swiper-pagination {
		position: absolute;
		top: 52%;
		left: -1.5%;
	}
	.swiper-pagination-bullet-active div {
		background: white;
	}
`

const MainSlider: React.FC<ISliderProps> = ({ images, scrollDown }) => {
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return ReactDOMServer.renderToStaticMarkup(
				<PaginationCircle color={'white'} className={className}>
					{<div />}
				</PaginationCircle>
			)
		},
	}

	return (
		<SliderWrapper>
			<Title>
				<p>
					the space is waiting for <span>you</span>
				</p>
			</Title>
			<Anchor onClick={scrollDown} />
			<Swiper
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				speed={1000}
				slidesPerView={1}
				pagination={pagination}
				modules={[Pagination, Autoplay]}
			>
				{images.map((path: string, index: number) => {
					return (
						<SwiperSlide key={index}>
							<MainSlide src={path} />
						</SwiperSlide>
					)
				})}
			</Swiper>
		</SliderWrapper>
	)
}
export default MainSlider
