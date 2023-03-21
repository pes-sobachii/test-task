import { atom } from 'recoil'

export const favouritesAtom = atom<string[]>({
	key: 'favouritesState',
	default: [],
})
