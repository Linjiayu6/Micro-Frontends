import React from 'react';

import { Context } from '../App'

export default () => {
  return (
    <Context.Consumer>
      {
        value => {
          console.log('Context.Consumer', value)
          return <div>孙子{ value.wechat }</div>
        }
      }
    </Context.Consumer>
  )
}