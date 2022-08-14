// Делает первую букву в строке заглавной
export const capitalizeFirstLetter = (string) => {
  let strNew = string.toLowerCase()
  return strNew.charAt(0).toUpperCase() + strNew.slice(1)
}