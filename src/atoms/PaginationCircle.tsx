import styled from 'styled-components'

const StyledCircle = styled('span')<{ color: string }>`
	height: 24px;
	width: 24px;
	display: inline-flex;
	border: 1px solid ${({ color }) => color};
	border-radius: 50%;
	background-color: transparent;
	align-items: center;
	justify-content: center;
	opacity: 1;
	div {
		border-radius: 50%;
		height: 60%;
		width: 60%;
	}
`

export default StyledCircle
