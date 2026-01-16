export const generateResultString = (stringToParse: string) => {
  const specValues = stringToParse.match(/-?\d+(\.\d+)?/g);

  if (!specValues) return ''

  const indicesValue = [...specValues].reduce(
    (specValuesSum, specValue) => specValuesSum + 2 ** (Number(specValue) - 1),
    0
  )

  return `tv_listen_voice_indices ${indicesValue}`
}
