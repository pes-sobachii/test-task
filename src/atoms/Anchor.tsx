import React from 'react'
import styled from 'styled-components'

import Arrow from '../assets/icons/Arrow-Down.svg'

const StyledAnchor = styled.button`
	position: absolute;
	bottom: 1%;
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;
	font-family: 'Lato', sans-serif;
	font-weight: 300;
	font-size: 32px;
	text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
	color: #ffffff;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 11px;
	-webkit-text-stroke: 0.5px black;
`

const Anchor: React.FC<{ onClick: () => void }> = ({ onClick }) => {
	return (
		<StyledAnchor onClick={onClick}>
			<p>Explore tours</p>
			<img src={Arrow} alt='' />
		</StyledAnchor>
	)
}

export default Anchor
