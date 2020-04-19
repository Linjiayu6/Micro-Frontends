import React from 'react'

class Button extends React.Component {
    static defaultProps = {
        text: 'defaultText',
    }

    constructor (props) {
       super(props)

       this.state = { text: props.text }
    }

    componentWillReceiveProps (nextProps) {
        console.log('button.component componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log('button.js shouldComponentUpdate', nextProps, nextState)
        // return false // 不会触发render
        return true
    }
    
    componentWillUpdate (nextProps, nextState) {
        console.log('===== button.js componentWillUpdate =====', nextProps, nextState)
    }
    
    componentDidUpdate (prevProps, prevState) {
        if (this.props.text !== prevProps.text) {
            // 做一些网络请求
            this.setState({ trigger: '有条件componentDidUpdate触发 setState' })
        }
        console.log('===== button.js componentDidUpdate =====', this.props, prevProps, prevState)
    }

    componentWillUnmount () {
        console.log('再见了👋')
    }

    render () {
        return (
            <div>
                <button>BUTTON</button>
                <div>{this.props.text}</div>
            </div>
        )
    }
}

export default Button;
