const password = process.argv[2];
if (!password) {
    console.log("Invalid");
    process.exit(1);
}
const hasValidLength = password.length >= 8;
const hasNumber = /\d/.test(password);
const hasUppercase = /[A-Z]/.test(password);

if(hasValidLength && hasNumber && hasUppercase){
    console.log("Valid");
} 
else{
    console.log("Invalid");
}
