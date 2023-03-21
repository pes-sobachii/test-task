import React from 'react'
import styled from 'styled-components'

import Tint from '../atoms/Tint'

interface IMainSlideProps {
	src: string
}

const Frame = styled.div`
	width: 100vw;
	height: 100vh;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const MainSlide: React.FC<IMainSlideProps> = ({ src }) => {
	return (
		<Frame>
			<Tint />
			<img src={src} alt={''} />
		</Frame>
	)
}

export default MainSlide
