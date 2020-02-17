function Sum (a, b) {
  let result = undefined;
  if (typeof a == 'number' && typeof b == 'number') {
    result = a + b
  } 
  return result
}

function AddList (arr) {
  let result = undefined
  if (Array.isArray(arr) && arr.length){
    result = 0
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] != 'number'){
        result = undefined
        break
      }
      result += arr[i]
    }
  }
  return result
}

function DivideBy (x, y) {
  let result = undefined
  if ((y != 0) && (typeof x == 'number' && typeof y == 'number')){
    result = x / y
  }
  return result
}

function ContainsString (str, substr) {
  let result = undefined
  if (typeof str == 'string' && typeof substr == 'string'){
    if (str.includes(substr)){
    result = true
    } else {
      result = false
    }
  }
  return result
}

function ReSortedNumbers (arr) {
  let result = []
  if (Array.isArray(arr) && arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] != 'number') {
        result = undefined
        break
      }
    }
    if(result){
      result = arr.sort(function (a, b) { return a - b })
    }
  }
  return result
}

//console.log(Sum(-10,0));

export { Sum, AddList, DivideBy, ContainsString, ReSortedNumbers };