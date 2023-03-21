import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const client = new ApolloClient({
	uri: 'https://spacex-production.up.railway.app/graphql/',
	cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<RecoilRoot>
				<ApolloProvider client={client}>
					<App />
				</ApolloProvider>
			</RecoilRoot>
		</BrowserRouter>
	</React.StrictMode>
)
