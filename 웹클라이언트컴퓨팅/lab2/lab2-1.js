let output = "";
for (let i = 0; i < 10; i++) {
    for (let j = 10; j > i - 1; j--) {
        output += ' ';
    }
    for (let k = 0; k < i * 2 + 1; k++){
      output += '*';
    }

    output += '\n';
}
console.log(output);
