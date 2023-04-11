const spinner = function(symbols, delay = 200){
  let index = 0
  const printSpinner = function(){
    if (index < symbols.length){
      process.stdout.write(`\r${symbols[index]} `);
      index ++
      setTimeout(printSpinner, delay)
    } else {
      console.log('\n');
    }
    return;
  }
  printSpinner();
}
 const symbols = ("|/-\\|/-\\|/-\\|/-\\")
spinner(symbols)