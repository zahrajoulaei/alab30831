let n = 10;

for (let i = n + 1; i > n; i++) {
  let prime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }

  if (prime) {
    console.log(`${i} is your next prime number dear!`);
    break;
  }
}
