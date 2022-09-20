const getStorageItems = (array) => {
  let items = []
  array.forEach((e) => {
    items.push(JSON.parse(localStorage.getItem(e)))
  })
  return items
}

const castToBRL = (obj) => {
  const keys = Object.keys(obj)
  const newObj = {}
  keys.forEach((e) => {
    let item = obj[e].toString()
    if (item.indexOf('.') === -1) {
      item += '.00'
    } else if (item.split('.')[1].length === 1) {
      item += '0'
    }
    newObj[e] = item.replace('.', ',')
  })

  return newObj
}

export { castToBRL, getStorageItems }
