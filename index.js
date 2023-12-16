const isInvalidInput = (value) => (typeof value !== "number" || value < 1 || value % 1 !== 0);

const fibonacciGenerator = (n) => {
  const result = [0, 1];
  
  if (isInvalidInput(n)) return [];
  
  for (let i = 0; i < n; i++) {
    if (n === 1) return [0];
    if (i > 1) result.push(result[i - 2] + result[i - 1]);
  }
  
  return result;
}
