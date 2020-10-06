export const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => {
    return total + item.price * item.cnt;
  }, 0)
}

