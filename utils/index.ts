export function splitArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = []

  for (let i = 0; i < size; i++) {
    result.push(arr.filter((_, index) => index % size === i))
  }

  return result
}

export function shuffleArray<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  return arr
}

export function randomArrayItems<T>(arr: T[], number = 1): T[] {
  const result: T[] = []
  const copy = [...arr]

  if (number >= arr.length) {
    return shuffleArray(arr)
  }

  for (let i = 0; i < number; i++) {
    const index = Math.floor(Math.random() * copy.length)
    result.push(copy.splice(index, 1)[0])
  }

  return result
}
