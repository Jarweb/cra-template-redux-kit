import { lazy } from 'react'

export default [
	{
		path: '/',
		exact: true,
		title: 'page 示例',
		component: lazy(() => import('../pages/home'))
	},
	{
		path: '/counter',
		exact: true,
		title: 'counter',
		component: lazy(() => import('../pages/counter'))
	},
	{
		path: '/404',
		title: '404',
		component: lazy(() => import('../components/404'))
	},
]