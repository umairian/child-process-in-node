function slowFunction() {
    let i = 0;
    while(i < 5000000000) {
        i++;
    }
    return i;
}

// process.on("message", function (message) {
//     console.log("Child process is UP");
//     const result = slowFunction();
//     process.send(result); // Send message to parent process
// });

console.log("Child process is UP");
const result = slowFunction();
process.send(result); // Send message to parent process