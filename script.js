let input = document.getElementById("screen");

function appendToScreen(value) {
    input.value += value;
}

function clearScreen() {
    input.value = "";
}

function clearLast(){
    let inputValue = input.value;
    input.value = inputValue.substring(0, inputValue.length - 1);
    }

function calculate() {
    let expression = input.value;
    try {
        let result = eval(expression);
        input.value = result.toFixed(10);//toFixed-it will show only 10 numbers
    } catch (error) {
        alert("Invalid expression");
    }
}
/* try catch:
The try statement allows you to define a block of code to be tested for errors while it is being executed.

The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

The try and catch keywords come in pairs
*/
/*let inputValue = input.value;: This line retrieves the current value of the input field referenced by the input variable and assigns it to a new variable called inputValue. This step ensures that we have a separate copy of the input value to work with.

input.value = inputValue.substring(0, inputValue.length - 1);: Here, we update the value of the input field. The substring() method is used to extract a portion of the inputValue string. The parameters passed to substring() define the starting index and ending index for the substring.

0 represents the starting index, indicating that we want to start from the beginning of the string.
inputValue.length - 1 is the ending index, specifying that we want to exclude the last character of the string.
By assigning this modified substring back to input.value, we effectively remove the last character from the input field's value.
 */