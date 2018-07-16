//Your code here
function justInvoke(callback) {
  return callback()
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, 18)
}