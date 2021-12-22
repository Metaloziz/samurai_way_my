const callback1 = () => {
    console.log('second')
}


const callback2 = () => {
    console.log('first')
    return callback1
}

callback2()()