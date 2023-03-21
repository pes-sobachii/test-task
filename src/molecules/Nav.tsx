import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledNav = styled.nav`
	color: white;
	text-transform: uppercase;
	font-size: 16px;
	font-family: 'Lato', sans-serif;
	ul {
		list-style-type: none;
		display: flex;
		gap: 32px;
	}

	li {
		border-bottom: 1px solid transparent;
	}

	li:hover {
		border-color: white;
		cursor: pointer;
	}
`

const Nav = () => {
	return (
		<StyledNav>
			<ul>
				<li>
					<NavLink to={'/'}>Home</NavLink>
				</li>
				<li>
					<NavLink to={'#'}>Tours</NavLink>
				</li>
				<li>
					<NavLink to={'#'}>About</NavLink>
				</li>
				<li>
					<NavLink to={'#'}>Help</NavLink>
				</li>
			</ul>
		</StyledNav>
	)
}

export default Nav
