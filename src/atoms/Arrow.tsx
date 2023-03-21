import styled from 'styled-components'

const Arrow = styled('div')<{ direction: string }>`
	display: block;
	margin: auto;
	width: 17px;
	height: 17px;
	border-top: 2px solid #000;
	border-left: 2px solid #000;
	transform: rotate(
			${({ direction }) => (direction === 'left' ? '135deg' : '-45deg')}
		)
		translate(10%, 10%);
`

export default Arrow
