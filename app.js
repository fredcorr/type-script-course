var userInput;
var userName;
//All of the one below are valid
userInput = 5;
userInput = 'Max';
// This shows that because userName is of tyoe string, we can't set to userInput as that is of valid unknown
// the if statement is a workaorund to prevent typescrpit from showing an error
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured', 500);
