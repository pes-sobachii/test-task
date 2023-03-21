import React from 'react'
import { useQuery } from '@apollo/client'
import { useRecoilState, useSetRecoilState } from 'recoil'

import images from '../assets/images'
import { launchesAtom } from '../recoil/atoms/launchesAtom'
import { favouritesAtom } from '../recoil/atoms/favouritesAtom'
import HomeTemplate from '../templates/HomeTemplate'
import { GET_LAUNCHES } from '../query/launches'

const Home = () => {
	const [launches, setLaunches] = useRecoilState(launchesAtom)

	const setFavourites = useSetRecoilState(favouritesAtom)

	const onLike = (id: string) =>
		setFavourites((oldState: string[]) => [...oldState, id])

	useQuery(GET_LAUNCHES, {
		variables: { limit: 9 },
		onCompleted: (data) => {
			setLaunches(data.launches)
		},
	})

	return <HomeTemplate images={images} launches={launches} onLike={onLike} />
}

export default Home
