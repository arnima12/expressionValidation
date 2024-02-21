function showEmailAlert (){
   var userEmail = prompt("Please type your email");
   if (userEmail === null || userEmail.trim() === "") {
    alert("Email field is blank. Please enter a valid email.");
    return; 
 }
console.log(userEmail);

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
switch (true) {
   case emailRegex.test(userEmail):
       alert("Email is valid: " + userEmail);
       break;
   default:
       alert("Invalid email format. Please enter a valid email.");
       break;
}
}
function showNumberAlert(){
   var userPhoneNumber = prompt("Please type your phone number with country code");
   if (userPhoneNumber === null || userPhoneNumber.trim() === "") {
    alert("Phone Number field is blank. Please enter a valid phone number.");
    return; 
 }
console.log(userPhoneNumber);

const phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
switch (true) {
   case phoneNumberRegex.test(userPhoneNumber):
       alert("Phone Number is valid: " + userPhoneNumber);
       break;
   default:
       alert("Invalid phone number format. Please enter a valid phone number.");
       break;
}
}
function showPostCodeAlert(){
   var userPostCode = prompt("Please type your postcode:");
   if (userPostCode === null || userPostCode.trim() === "") {
    alert("Post Code field is blank. Please enter a valid post code.");
    return; 
 }
console.log(userPostCode);

const postCodeRegex = /^\d{4}$/;
switch (true) {
   case postCodeRegex.test(userPostCode):
       alert("Post Code is valid: " + userPostCode);
       break;
   default:
       alert("Invalid post code format. Please enter a valid post code.");
       break;
}
}
