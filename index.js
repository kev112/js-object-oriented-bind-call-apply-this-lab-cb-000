//Your code here
function justInvoke(callback) {
  return callback()
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args) {
  fn.apply(thisValue, arg)
}