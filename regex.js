/*//Try-Catch

const user = {email: 'me@gmail.com'}

try {

    if (!user.name) {
        // throw 'user has no name';
        // throw new Error('the message');
        throw new SyntaxError('the message');
    }
    //produces Reference Error
    // myFunction();

    //TypeError
    // null.myfunction();

    //syntaxError
    // eval('helo world');

    //URIError
    // decodeURIComponent('%')

}catch (e) {
    // console.log(e.message); //produces just the meassage
    // console.log(e.name); //produces the typr of the error
    // console.log(e instanceof ReferenceError); //true
} finally {
    // what is here runs regardless of what is in the try and catch braces
    console.log('Finally runs regardless of the result');
}
*/



///////////////REGULAR EXPRESSION///////

let re;
re = /hello/;
// re = /hello/g; //Global search: which means it searches the expression throughout the given test case, not just the the first match that it finds
re = /hello/i; //i = case insensitive

console.log(re); // /hello/
console.log(re.source); // hello

//Regular Expression function
//exec() -returns an array if there is a match or null if not

// const result = re.exec('hello world'); //returns an array with the index of where the value of 're' which in this case 'hello' starts in the given string of the exec function, which is 0, lets say we have exec('eebru hello world'), the index would be 6. the 3 values in the array are [the expression; 'hello', its index; 0, and the input in the exec()]
// console.log(result);
// console.log(result[0]); //the expression
// console.log(result.index); //its index 
// console.log(result.input); //the input expression is searching from 

//test()  - returns true or false wheather or not there is a match

// const result = re.test('Hello') //retruns false because of uppercase H, we can make the case of re insensitive by add adding a flag after thr expression forward slash like this:___  re = /hello/i;

//match() - returns result array or null
// const str = 'Hello There' 
// const result = str.match(re); //gives the same result as the exec(), and now the we have included the case insensitivity in the re var, it returns the uppercase "Hello"


// search() - returns index of the first match, if not found, returns -1
// const str = 'Hello There';
// const result = str.match(re) // 0, if str = 'img Hello There' it'd be 3

// replace () - returns a new string with some or all matches of pattern

const str = 'Hello There';
const newStr = str.replace(re, 'Hi') //returns "HI there"; it finds the match of re and replace it with whatever is  passed in the replace
























