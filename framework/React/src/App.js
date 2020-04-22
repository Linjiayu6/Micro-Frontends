
import React from 'react';
import DOM from './tools/virtualDom.js';
import Button from './components/button';
import Test from './components/setState';
// 高阶函数
import HOC_Fn from './components/HOC_Fn'
import HOC_Component from './components/HOC_Component'

export const Context = React.createContext('defaultContext')

class App extends React.Component {
  static defaultProps = {
    name: 'Lin.JY',
    age: '18'
  }

  constructor (props) {
    super(props)
    this.handleClick3 = this.handleClick3.bind(this)

    this.state = {
      'show': true,
      'text': '我是一个粉刷匠'
    }
  }
  
  componentWillMount () {
    // this.setState({ test1: '1' })
    console.log('======  componentWillMount ====== ', this.state)
  }

  componentDidMount () {
    this.setState({ test2: '2' })
    console.log('======  componentDidMount ====== ', this.state)
    document.body.appendChild(DOM)
    console.log(DOM)

    this.refs.vm.setAttribute('class', 'vmstyle')
    console.log('this.refs.vm.......', this.refs.vm)
  }

  componentWillReceiveProps (nextProps){
    // this.setState({ test2: '2' })
    console.log('App.js componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('App.js shouldComponentUpdate', nextProps, nextState)
    // return false // 不会触发render
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('App.js componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate (prevProps, prevState) {
    // this.setState({ test2: '2' })
    console.log('App.js componentDidUpdate', prevProps, prevState)
  }

  handleClick1 () {
    // 输出====== handleClick ===== undefined
    console.log('====== handleClick1 =====', this)
  }

  handleClick2 () {
    console.log('====== handleClick2 =====', this)
    // this.setState({ 'text': '你不是' })
    this.setState((state, props) => ({ 'text': '你不是,  你闭嘴' }))
  }

  handleClick3 () {
    console.log('====== handleClick3 =====', this)
    this.setState({ 'show': false })
  }

  handleClick4 () {
    console.log('====== handleClick4 =====', this)
  }

  handleClick5 = () => console.log('====== handleClick5 =====', this)

  render () {
    // console.log(<div className="DIV_CLASSNAME" id="DIV_ID" style={{ color: 'red' }}>
    //   <span id="SPAN_ID_1">SPAN_TEXT1</span>
    //   <span id="SPAN_ID_2" onClick={() => { console.log('SPAN_TEXT2....')}}>SPAN_TEXT2</span>
    // </div>)
    console.log('================', this.state)
    const HOC = HOC_Fn (HOC_Component)
    return (
      <Context.Provider value = {{ github: 'hhhhh', wechat: 'wechat' }}>
        <div id="1">
          <h3>1. 合成事件, 事件绑定 </h3>
          <button onClick={this.handleClick1}>React1  'onClick=this.handleClick1'</button>
          <button onClick={() => this.handleClick2()}>React2 '调用的时候箭头函数'</button>
          <button onClick={this.handleClick3}>React3 'constructor bind'</button>
          <button onClick={this.handleClick4.bind(this)}>React4 '函数bind'</button>
          <button onClick={this.handleClick5}>React5 '函数 就是使用箭头函数创建'</button>
          {
            this.state.show && <Button text={this.state.text} />
          }
        </div>

        <div id="2">
          <h3 ref="vm">2. Virtual Dom</h3>
          <div className="DIV_CLASSNAME" id="DIV_ID" style={{ color: 'red' }}>
            <span id="SPAN_ID_1">SPAN_TEXT1</span>
            <span id="SPAN_ID_2">SPAN_TEXT2</span>
          </div>
        </div>

        <Test test='linjiayu' />
        <HOC { ...this.props } />

        <h1>key值</h1>
        <ul>
          {
            [1,2,3].map((val, key) => <li key={key}>{ val }</li>)
          }
        </ul>
      </Context.Provider>
    )
    
  }
}

/* 
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Lin.JY
      </header>
    </div>
  );
}
*/

export default App;
