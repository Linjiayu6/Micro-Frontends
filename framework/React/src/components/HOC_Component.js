import React from 'react'

class HOC_Component extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>{ JSON.stringify(this.props) }</div>
    )
  }
}

export default HOC_Component