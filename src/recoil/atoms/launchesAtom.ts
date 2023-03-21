import { atom } from 'recoil'
import { ILaunch } from '../../Types/Types'

export const launchesAtom = atom<ILaunch[]>({
	key: 'launchesState',
	default: [],
})
