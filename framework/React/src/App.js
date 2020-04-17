import React from 'react';

class App extends React.Component {
  static defaultProps = {
    name: 'Lin.JY',
    age: '18'
  }

  constructor (props) {
    super(props)
    console.log(props)
    this.handleClick3 = this.handleClick3.bind(this)
  }
  
  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  handleClick1 () {
    // 输出====== handleClick ===== undefined
    console.log('====== handleClick1 =====', this)
  }

  handleClick2 () {
    console.log('====== handleClick2 =====', this)
  }

  handleClick3 () {
    console.log('====== handleClick3 =====', this)
  }

  handleClick4 () {
    console.log('====== handleClick4 =====', this)
  }

  handleClick5 = () => console.log('====== handleClick5 =====', this)

  render () {
    return (
      <div>
        <div id="1">
          <h3>1. 合成事件, 事件绑定 </h3>
          <button onClick={this.handleClick1}>React1  'onClick=this.handleClick1'</button>
          <button onClick={() => this.handleClick2()}>React2 '调用的时候箭头函数'</button>
          <button onClick={this.handleClick3}>React3 'constructor bind'</button>
          <button onClick={this.handleClick4.bind(this)}>React4 '函数bind'</button>
          <button onClick={this.handleClick5}>React5 '函数 就是使用箭头函数创建'</button>
        </div>

        <div id="2">
          <h3>2. Virtual Dom</h3>
          <div className="DIV_CLASSNAME" id="DIV_ID" style={{ color: 'red' }}>
            <span id="SPAN_ID_1">SPAN_TEXT1</span>
            <span id="SPAN_ID_2">SPAN_TEXT2</span>
          </div>
        </div>
      </div>
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
