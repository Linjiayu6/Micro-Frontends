
import React from 'react'

import Child from './child'
import emitter from '../tools/EventEmitter'


// class Button extends React.Component {
//     static defaultProps = {
//         text: 'defaultText',
//     }

//     constructor (props) {
//        super(props)

//        this.state = { text: props.text }
//     }

//     componentWillReceiveProps (nextProps) {
//         console.log('button.component componentWillReceiveProps', nextProps)
//     }

//     shouldComponentUpdate (nextProps, nextState) {
//         console.log('button.js shouldComponentUpdate', nextProps, nextState)
//         // return false // 不会触发render
//         return true
//     }
    
//     componentWillUpdate (nextProps, nextState) {
//         console.log('===== button.js componentWillUpdate =====', nextProps, nextState)
//     }
    
//     componentDidUpdate (prevProps, prevState) {
//         if (this.props.text !== prevProps.text) {
//             // 做一些网络请求
//             this.setState({ trigger: '有条件componentDidUpdate触发 setState' })
//         }
//         console.log('===== button.js componentDidUpdate =====', this.props, prevProps, prevState)
//     }

//     componentWillUnmount () {
//         console.log('再见了👋')
//     }

//     render () {
//         return (
//             <div>
//                 <button>BUTTON</button>
//                 <div>{this.props.text}</div>
//             </div>
//         )
//     }
// }

class Button extends React.Component {

    state = { val: 0 }


    componentWillMount () {
      this.setState({ val: this.state.val + 10 })
    }

    componentDidMount() {
      console.log('this.context', this.context)
      setTimeout(() => {
        console.log(this.state.val) // 10
        this.setState({ val: this.state.val + 20 }) // 触发一次render
        console.log(this.state.val) // 30
        
        this.setState({ val: this.state.val + 30 }) // 再次 触发一次 render
        console.log(this.state.val) // 60
      }, 0)
    }

    click = (msg) => {
      emitter.emit('changeState', msg)
    }
  
    render() {
      /**
       * 1. componentWillMount, 10
       * 2. componentDidMount - setTimeout: 10 + 20 = 30
       * 3. componentDidMount - setTimeout: 30 + 30 = 60
       */
      console.log('+++++++++++++', this.state.val) 

      // console.log('====== this.context ======', this.context)
      // return <Context.Consumer>
      //   {
      //     value =>  
      //   }
      // </Context.Consumer>
      return (
        <div onClick={() => this.click('你说的都对')}>
          <Child />
          <div> {`Counter is ${this.state.val}`} </div>
        </div>
      )
    }
  }

export default Button;
