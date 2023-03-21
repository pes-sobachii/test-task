import React from 'react'

import MainButton from '../atoms/MainButton'
import Arrow from '../atoms/Arrow'
import ButtonsBlock from '../atoms/ButtonsBlock'

const SliderButtons = () => {
	return (
		<ButtonsBlock gap={'15px'}>
			<MainButton
				px={'15px'}
				py={'12px'}
				className={'prevEl'}
				bgcolor={'#ECECEC'}
			>
				<Arrow direction={'right'} />
			</MainButton>
			<MainButton
				px={'15px'}
				py={'12px'}
				className={'nextEl'}
				bgcolor={'#ECECEC'}
			>
				<Arrow direction={'left'} />
			</MainButton>
		</ButtonsBlock>
	)
}

export default SliderButtons
