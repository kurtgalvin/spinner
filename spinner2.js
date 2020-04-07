const spinner = function(spins) {
  let count = 0;
  const positions = ['|', '/', '-', '\\']
  const maxCount = spins * positions.length

  const x = setInterval(() => {
    const index = count % positions.length
    process.stdout.write(`\r${positions[index]}   `);
    count++;
    if (count > maxCount) {
      clearInterval(x)
    }
  }, 200);
}

spinner(2)