export const getPreviousDateFromCurrentDate = () => {
  const currentDate = new Date()
  const previousDate = new Date()
  return previousDate.setDate(currentDate.getDate() - 1)
}

export const getPreviousBack30DaysFromPreviousDate = () => {
  const currentDate = new Date()
  const previousDate = new Date()
  previousDate.setDate(currentDate.getDate() - 1)
  return new Date().setDate(previousDate.getDate() - 30)
}

export const getPreviousBack30DaysFromCurrentDate = () => {
  const currentDate = new Date()

  return new Date().setDate(currentDate.getDate() - 30)
}

export const getNextDateFromCurrentDate = () => {
  const currentDate = new Date()
  const previousDate = new Date()
  return previousDate.setDate(currentDate.getDate() + 1)
}
