export const randomNumber = () => {
  const rand = Math.floor(10000 + Math.random() * (20000 - 1 + 1))
  return rand
}
