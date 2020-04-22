const EventEmitter = require('events')

const emitter = new EventEmitter();
export default emitter

// // 1. register
// emitter.on('RUN', () => {
//     console.log('1. register')
//     console.log('2. then run()')
// })

// // 2. execute
// emitter.emit('RUN')
