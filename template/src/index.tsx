import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './app'
import ErrorBoundle from './components/ErrorBoundle'

render(
	<React.StrictMode>
		<Provider store={store}>
			<ErrorBoundle>
				<App />
			</ErrorBoundle>
		</Provider>
	</React.StrictMode>
	, document.getElementById('root')
)