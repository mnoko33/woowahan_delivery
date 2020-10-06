export const addExistingItem = (items, newItem) => {
  if (items.find(item => item.id === newItem.id)) {
    return items.map(item => {
      if (item.id === newItem.id) item.cnt += newItem.cnt;
      return item;
    })
  } else {
    return [ ...items, newItem ]
  }
}