import styled from 'styled-components'

const Title = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 48px;
	font-weight: 800;
	text-transform: uppercase;
	z-index: 4;
	pointer-events: none;

	span {
		text-align: center;
		font-size: 310px;
		line-height: 300px;
		display: block;
	}
`

export default Title
