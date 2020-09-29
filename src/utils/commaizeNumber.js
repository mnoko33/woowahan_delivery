export const commaizeNumber = (num) => {
  let result = '';
  num = String(num);
  const N = num.length;
  
  for (let i = 0; i < N; i++) {
    result += num[i];
    if ((N - i - 1) % 3 === 0 && i !== N - 1) {
      result += ',';
    }
  }
  return result;
}