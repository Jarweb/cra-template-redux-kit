## intro

- react
- redux
- typescript
- eslint
- redux-immer

```
|—— assets
| 	|__ styles
|		|__ fonts
|		|__ imgs
|__ components 						// 通用组件
|__ hooks 								// 通用 hooks
|__ stores								// redux store
|__ routes								// routes config
|__ services							// fetch effect
|__ reducers							// reducers，按数据实体
|		|__ demo1
|		|__ demo2
|__ pages
|		|__ count
|			|__ components			// 业务组件
|			|__ index.tsx
|			|__ controller.tsx	// 视图逻辑，effect/event/hook
|__ utils
|__ app.tsx
|__ index.tsx
```