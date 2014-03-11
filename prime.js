var numberCheck = function (num) {
    for (i = 2; i < num; i++) {
	if (num % i == 0) {
	    return false;
            }
    }
        return true;
}

var checkNewPrimes = function () {    
    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
    var finalPrimes = [];
    var count = 0;
    var resultFound = false;
    var input = document.getElementById("userinput").value;
    var end = "<p>The prime factorization of" + input + "is:";

    while(!numberCheck(input)) {
	while(count < primes.length && !resultFound) {
	    if (input % primes[count] == 0) {
		finalPrimes.push(primes[count]);
		resultFound = true;
		input = input / primes[count];
	    }
	    count = count + 1;
	}
	count = 0;
	resultFound = false;
    }
    finalPrimes.push(input);
    
    end += finalPrimes.toString() + "</p>";
    document.getElementById("end").innerHTML = end;
}

/*var primesArrayCreator = function () {
    var primes = new Array();
    var prime = document.getElementById("userinput").value;

    var isPrime = true;
    for(var i = 2; i <= input; i++) {
	if(input % i == 0) {
	    for(var j=2; j < i; i++) {
		if(i % j == 0) {
		    isPrime = false;
		}
	    }
		if(isPrime = true) {
		    primes.push(i);
		}
	    }
	return primes
	}*/