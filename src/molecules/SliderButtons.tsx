import React from 'react'

import Button from '../atoms/Button'
import Arrow from '../atoms/Arrow'
import ButtonsBlock from '../atoms/ButtonsBlock'

const SliderButtons = () => {
	return (
		<ButtonsBlock gap={'15px'}>
			<Button
				px={'15px'}
				py={'12px'}
				className={'prevEl'}
				bgcolor={'#ECECEC'}
			>
				<Arrow direction={'right'} />
			</Button>
			<Button
				px={'15px'}
				py={'12px'}
				className={'nextEl'}
				bgcolor={'#ECECEC'}
			>
				<Arrow direction={'left'} />
			</Button>
		</ButtonsBlock>
	)
}

export default SliderButtons
