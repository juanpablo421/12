const { bgCyan } = require('colors');

 require('colors');

function contadorBase(base) {
  for (let i = 0; i < base; i++) {
    for (let j = 0; j < base; j++) {
      const num = i * base + j;
      console.log('======================'.cyan)
      console.log((`Número en base ${base}: ${num.toString(base)}`));
      console.log('======================'.bgCyan)
    }
  }
}

module.exports = { contadorBase };
