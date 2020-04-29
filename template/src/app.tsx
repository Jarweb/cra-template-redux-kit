import React, { Suspense } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes'


export default () => {
	return (
		<HashRouter>
			<Suspense fallback={'loading...'}>
				<Switch>
					{routes.map(({ ...props }: any, index: number) => (
						<Route
							{...props}
							component={props.component}
							key={(props.path + index) as string}
						/>
					))}
					<Redirect from="*" to="/404" />
				</Switch>
			</Suspense>
		</HashRouter>
	)
}