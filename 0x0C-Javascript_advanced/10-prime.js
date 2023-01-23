function countPrimeNumbers(){
	var primeNumbers = 0;
	for(var i = 2; i <= 100; i++) {
		let prime = true;
		for (var j = 2; j < i; j++) {
			if (i % j === 0){
				prime = false;
			}
		}
		if(prime) primeNumbers++;
	}
	return primeNumbers;
}

  const startTime = performance.now();
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
