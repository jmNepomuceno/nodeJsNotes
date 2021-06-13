const EventEmitter = require('events')
const customEmitter = new EventEmitter()

// on - listen  for an event
// emit - emit an event

//on(name of the event , call back function, depends if it needs a paramater)
customEmitter.on('request' , ()=>{
    console.log("on without arguments")
})
customEmitter.on('request' , (name,age)=>{
    console.log("on with arguments ", name, age)
})

customEmitter.on('requestB' , (arg)=>{
    console.log("on with arguments ", arg)
})

// emit(name of the event, also depends if it needs a parameter)
customEmitter.emit('request' , 'jm' , 17)

data = {
    name : 'JM',
    number : 28
}
customEmitter.emit('requestB' , data)