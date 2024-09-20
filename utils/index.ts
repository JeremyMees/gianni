export function splitArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = []

  for (let i = 0; i < size; i++) {
    result.push(arr.filter((_, index) => index % size === i))
  }

  return result
}
