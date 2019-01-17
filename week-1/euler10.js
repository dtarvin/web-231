function euler10(max) {
    let prime = 1;
    let number = 0;
    do {
        prime += 1;

        const isPrime = num => {
            for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
                if ((num % i === 0)) {
                    return false;
                }
            }
            return num !== 1 && num !== 0;

        };

        number += isPrime(prime) ? prime : 0;

    } while (prime < max);

    console.log(number);
}

euler10(2000000);