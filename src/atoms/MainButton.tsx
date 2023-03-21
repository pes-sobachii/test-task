import React from 'react'
import styled from 'styled-components'

interface IButton {
	className?: string
	children: JSX.Element | JSX.Element[] | string
	bgcolor?: string
	px?: string
	py?: string
	onClick?: () => void
}

const StyledButton = styled('button')<Omit<IButton, 'children'>>`
	padding: ${({ py, px }) => `${py || '0'} ${px || '0'}`};
	background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
	text-transform: uppercase;
	font-weight: 600;
	font-size: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 30px;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		filter: brightness(75%);
	}
	img {
		width: 26px;
		height: 26px;
	}
`

const MainButton: React.FC<IButton> = ({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>
}

export default MainButton
