import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, errorInfo) {
    this.setState({ hasError: true })
    console.log(errorInfo)
    console.log(error)
  }

  render () {
    return this.state.hasError === true ? <div>Error</div> : this.props.children
  }
}
