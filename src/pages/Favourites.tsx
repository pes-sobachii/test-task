import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { favouriteSelector } from '../recoil/selectors/favouritesSelector'
import { favouritesAtom } from '../recoil/atoms/favouritesAtom'
import FavouritesTemplate from '../templates/FavouritesTemplate'

const Favourites = () => {
	const favourites = useRecoilValue(favouriteSelector)
	const setFavourites = useSetRecoilState(favouritesAtom)

	const onDelete = (id: string) => {
		setFavourites((oldState) => oldState.filter((item) => item !== id))
	}

	const clearAll = () => {
		setFavourites([])
	}

	return (
		<FavouritesTemplate
			favourites={favourites}
			clearAll={clearAll}
			onDelete={onDelete}
		/>
	)
}

export default Favourites
