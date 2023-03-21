import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

import ButtonsBlock from '../atoms/ButtonsBlock'
import MainButton from '../atoms/MainButton'
import Heart from '../assets/icons/Heart.png'
import Logo from '../assets/icons/spaceX.png'
import Nav from '../molecules/Nav'
import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'

const StyledHeader = styled.header`
	position: absolute;
	background-color: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;
	padding: 14px 0;
	width: 100vw;
	z-index: 10;
`

const Header = () => {
	const location = useLocation()

	return (
		<StyledHeader>
			<Container>
				<Wrapper>
					<Link to={'/'}>
						<img src={Logo} alt={'Space X'} />
					</Link>
					<Nav />
					<ButtonsBlock gap={'10px'}>
						<Link to={'/favourite'}>
							<MainButton
								py={'12px'}
								px={'12px'}
								bgcolor={
									location.pathname === '/favourite' ? '#DD377D' : '#ECECEC'
								}
							>
								<img src={Heart} alt={'Favourites'} />
							</MainButton>
						</Link>
						<Link to={'#'}>
							<MainButton py={'12px'} px={'33px'} bgcolor={'#D3EAFF'}>
								Sign In
							</MainButton>
						</Link>
					</ButtonsBlock>
				</Wrapper>
			</Container>
		</StyledHeader>
	)
}

export default Header
