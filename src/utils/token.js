export const maxis = {
  chin: 2,
  ears: 2,
  eyes: 5,
  hair: 5,
  mouth: 6,
  nose: 2,
  neck: 3,
}

export const possibilities = Object.values(maxis).reduce((curr, acc) => curr * acc)

export const getN = (max) => {
  return Math.ceil(Math.random() * max)
}
  
export const getPiece = (key) => {
  const max = maxis[key]
  const n = getN(max)
  
  return `${key}-${n}`
}

export const getId = (idsMinted) => {
  const keys = Object.keys(maxis)

  const id = keys.map(getPiece).join(':')

  if (idsMinted[id]) return null

  return id
}