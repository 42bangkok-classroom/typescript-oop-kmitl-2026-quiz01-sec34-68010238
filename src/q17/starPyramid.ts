let num1 = Number(process.argv[2]);
if (isNaN(num1) || num1 <= 0) {
    process.exit(0);
}
for (let i = 1; i <= num1; i++) {
    console.log("*".repeat(i));
}
