// // export default sum;

export function capitalize(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function reverse(val) {
  return val.split('').reverse().join('');
}

export function caesarCipher(str, shiftFactor) {
  let shifterString = [];
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);
  const A = 'A'.charCodeAt(0);
  const Z = 'Z'.charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    let letter = str.charCodeAt(i);
    if (letter >= a && letter <= z) {
      letter = letter + (shiftFactor % 26);
      if (letter < a){
        letter = letter + 26
      }
      if (letter > z){
        letter = letter - 26
      }
    }
    if (letter >= A && letter <= Z) {
      letter = letter + (shiftFactor % 26);
      if (letter < A){
        letter = letter + 26
      }
      if (letter > Z){
        letter = letter - 26
      }
    }
    shifterString.push(String.fromCharCode(letter))
  }
  return shifterString.join('')
}

