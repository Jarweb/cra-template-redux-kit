import { PureComponent} from 'react'

export default class ErrorBoundary extends PureComponent {
  public componentDidCatch(err: any) {
    console.log(err)
  }

  public render() {
    return this.props.children
  }
}