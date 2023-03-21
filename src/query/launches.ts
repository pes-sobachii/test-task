import { gql } from '@apollo/client'

export const GET_LAUNCHES = gql`
	query ExampleQuery($limit: Int) {
		launches(limit: $limit) {
			id
			details
			mission_name
		}
	}
`
