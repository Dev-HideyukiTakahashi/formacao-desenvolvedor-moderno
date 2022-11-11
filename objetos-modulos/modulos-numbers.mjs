// 'export' pode ser visto por outros módulos

export function sum(num1, num2) {
  return num1 + num2;
}

export function exp(base, exponent) {
  return base ** exponent;
}

export function round(value, precision) {
  var multiplier = ex(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// export{sum, round} alternativa para exportar
