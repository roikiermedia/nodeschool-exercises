var sum = 0;

for (n = 2; n < process.argv.length; n++) {
  sum += Number(process.argv[n]);
}

console.log(sum);
