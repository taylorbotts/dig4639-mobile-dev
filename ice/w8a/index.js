const myArray = [2, 5, 8, 20, 18]
console.log(myArray)

let sum = 0
for (let index = 0; index < myArray.length; index++) {
  sum += myArray[index]
}

console.log(sum)

sum = 0
for (const item of myArray) {
  sum += item
}

console.log('before', myArray)
for (let i = 0; i < myArray.length; i++) {
  myArray[i] /= 2
}

console.log('after', myArray)

const newArray = []
console.log('before', myArray)
for (let i = 0; i < myArray.length; i++) {
  newArray.push(myArray[i] / 2)
}

console.log('after', newArray, 'original', myArray)

function addTwo (value, index, array) {
  return value + 2
}

const resultArray = myArray.map(addTwo)
console.log(resultArray)

const resultArray2 = myArray.map((value) => value + 2)
console.log(resultArray2)

function printItems (array) {
  const htmlArray = array.map((value) => `<p>${value}</p>`)
  console.log(htmlArray)
}

printItems(myArray)

printItems(myArray.sort((a, b) => a - b))

const todoList = [
  { content: 'Task 1', priority: 2, completed: true },
  { content: 'Task 2', priority: 1, completed: true },
  { content: 'Task 3', priority: 3, completed: false }
]

console.log(todoList)

function printTodo (array) {
  const htmlArray = array.map((value) =>
  `<p${
    (value.completed) ? ' class="done"' : ''}>
    ${value.priority}: ${value.content}
  </p>`)
  return htmlArray
}
console.log(printTodo(todoList).join('\n'))

const filteredArray = []
for (const item of todoList) {
  if (!item.completed) {
    filteredArray.push(item)
  }
}
console.log(printTodo(filteredArray).join('\n'))

console.log(printTodo(todoList.filter((item) => item.completed)))
