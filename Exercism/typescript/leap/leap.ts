const createIsMod = (y: number) => (m: number) => y % m === 0
function isLeapYear(year: number): boolean {
  const isMod = createIsMod(year)
  return isMod(400) || (isMod(4) && !isMod(100))
}

export default isLeapYear
