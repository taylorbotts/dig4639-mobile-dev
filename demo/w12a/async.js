console.log('Starting Timeout!')
// setTimeout(asyncFunction, 1000)
function asyncFunction () {
  console.log('1 second passed, calling promise')
  promisedOne().then(() => { console.log('After!') })
}

function promisedOne () {
  return new Promise((resolve, reject) => {
    setTimeout(asyncFunction, 1000)
    function asyncFunction () {
      console.log('1 second passed!')
      resolve()
    }
  })
}

async function iNSync () {
  let value = await promisedOne()
  console.log("I'm done!!" + value)
  value = await promisedOne()
  console.log("I'm done!!" + value)
  value = await promisedOne()
  console.log("I'm done!!" + value)
}
iNSync()
