import React from 'react'
import styled from 'styled-components'

const StyledBlock = styled.div`
	text-align: right;
	padding: 40px 0;
	button {
		font-family: 'Lato', sans-serif;
		font-style: normal;
		font-weight: 300;
		font-size: 24px;
		color: #556b84;
		transition: all 0.3s ease;
	}
	button:hover {
		filter: brightness(85%);
		text-decoration: underline;
	}
`

const ClearAllBlock: React.FC<{ onClearAll: () => void }> = ({
	onClearAll,
}) => {
	return (
		<StyledBlock>
			<button onClick={onClearAll}>Clear All</button>
		</StyledBlock>
	)
}

export default ClearAllBlock
