export function splitArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = []

  for (let i = 0; i < size; i++) {
    result.push(arr.filter((_, index) => index % size === i))
  }

  return result
}

export function randomArrayItems<T>(arr: T[], number = 1): T[] {
  const result: T[] = []
  const copy = [...arr]

  for (let i = 0; i < number; i++) {
    const index = Math.floor(Math.random() * copy.length)
    result.push(copy.splice(index, 1)[0])
  }

  return result
}
