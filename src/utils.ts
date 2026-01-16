export const generateResultString = (stringToParse: string) => {
  const specNumbers = stringToParse.match(/-?\d+(\.\d+)?/g)?.map(Number);

  if (!specNumbers) {
    return ''
  }

  const indicesNumbers = specNumbers.map((number) => number - 1)
  const indicesValue = [...indicesNumbers].reduce(
    (playerValuesSum, playerValue) => playerValuesSum + 2 ** playerValue,
    0
  )

  return `tv_listen_voice_indices ${indicesValue}`
}