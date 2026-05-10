function reformat(message, formatter) {
  let result = formatter(message); // ?
  result = formatter(result)
  result = formatter(result)
  return `TEXTIO: ${result}`

}


export { reformat };

