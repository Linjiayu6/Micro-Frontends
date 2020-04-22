import React, { Component } from 'react'
import emitter from '../tools/EventEmitter'

class SetState extends Component {

  constructor (props) {
    super(props)
    console.log(this.props)
    this.state = {
      value: 0,
      test: 1,
      msg: 'default msg'
    }
  }

  componentWillMount() {
    this.setState({ value: this.state.value + 1 })
    console.log('1', this.state)
    this.setState({ value: this.state.value + 1, value2: 1 })
    console.log('2',this.state)

    setTimeout(() => {
      this.setState({ value: this.state.value + 1 })
      console.log('3', this.state)
      this.setState({ value: this.state.value + 1 })
      console.log('4', this.state)
    }, 0)

    /**
     * 同步
     * console.log('1', this.state) // 0
     * console.log('2', this.state) // 0
     * [this.setState({ value: this.state.value + 1 }), this.setState({ value: this.state.value + 1 }), setTimeout()]
     * - val = 1 (因为batchUpdate, 批量运行, key值相同, 只会执行最后一个, 前面被覆盖了)
     * - 执行setTimeout:
     * 在setTimeout里面是可以同步拿到结果的???????
     * val = 1
     * this.setState({ value: this.state.value + 1 })
     * val = 2
       console.log('3', this.state) // 2
       val = 2
       this.setState({ value: this.state.value + 1 })
       val = 3
       console.log('4', this.state) // 3
     * 
     */
  }

  componentDidMount () {
    document.body.addEventListener('click', (e) => {
      this.setState({ test: this.state.test + 1111 })
      console.log('@@@@@@@@@@@', this.state)
      this.setState({ test: this.state.test + 2222 })
      console.log('@@@@@@@@@@@', this.state)
    })
    // this._addValue()

    this.eventEmitter = emitter.addListener('changeState', (msg) => {
      this.setState({ msg })
    })
  }
   
  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter);
  }

  _addValue() {
    this.setState({
      value: this.state.value + 1000
    })
    console.log(0)
    // setTimeout(() => {
    //   console.log(1)
    //   this.setState({
    //       value: this.state.value + 2000
    //   })
    //   console.log(2)
    //   this.setState({
    //       value: this.state.value + 3000
    //   })
    // }, 0)
    
      console.log(1)
      this.setState({
          value: this.state.value + 2000
      })
      console.log(2)
      this.setState({
          value: this.state.value + 3000
      })
  }
  
  click () {
    console.log('点击前', this.state.value)
    this.setState((prevState) => {
      console.log('prevState, this.state.value', prevState.value, this.state.value)
      return { value: prevState.value + 10000000 }
    })
    console.log('点击后', this.state.value)
  }

  render () {
    return (
      <div onClick={() => this.click()}>
        <div>这里{ this.state.value }</div>
        <div>eventEmitter { this.state.msg }</div>
      </div>
    )
  }
}

// const { string } = React.PropTypes
// SetState.propTypes = {
//   test: string
// }

export default SetState