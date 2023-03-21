import styled from 'styled-components'

const ButtonsBlock = styled('div')<{ gap: string }>`
	display: flex;
	gap: ${({ gap }) => gap};
	align-items: center;
`

export default ButtonsBlock
