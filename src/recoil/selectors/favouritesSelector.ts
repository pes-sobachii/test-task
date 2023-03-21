import { selector } from 'recoil'
import { favouritesAtom } from '../atoms/favouritesAtom'
import { launchesAtom } from '../atoms/launchesAtom'

export const favouriteSelector = selector({
	key: 'favouriteSelector',
	get: ({ get }) => {
		const favourites = get(favouritesAtom)
		const launches = get(launchesAtom)
		return launches.filter((launch) => favourites.includes(launch.id))
	},
})
