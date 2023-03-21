import React, { useRef } from 'react'

import MainSlider from '../organisms/MainSlider'
import CardSlider from '../organisms/CardSlider'
import { ILaunch } from '../Types/Types'

interface IHomeTemplateProps {
	images: string[]
	launches: ILaunch[]
	onLike: (id: string) => void
}

const HomeTemplate: React.FC<IHomeTemplateProps> = ({
	images,
	launches,
	onLike,
}) => {
	const scrollRef = useRef<HTMLDivElement>(null)

	const scrollDown = () =>
		scrollRef.current &&
		scrollRef.current.scrollIntoView({ behavior: 'smooth' })

	return (
		<div>
			<MainSlider images={images} scrollDown={scrollDown} />
			<CardSlider images={images} data={launches} onLike={onLike} />
			<div ref={scrollRef} />
		</div>
	)
}

export default HomeTemplate
