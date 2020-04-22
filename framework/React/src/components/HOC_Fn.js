import React from 'react'

const HOC_Fn = Component => 
  class HOC extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        highOrder: 'highOrder'
      }
    }

    render () {
      return (
        <div>
          <div>高阶组件</div>
          <Component { ...this.props } {...this.state} />
        </div>
      )
    }
  }

export default HOC_Fn