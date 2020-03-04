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
/*
let re;
re = /hello/;
// re = /hello/g; //Global search: which means it searches the expression throughout the given test case, not just the the first match that it finds
re = /hello/i; //i = case insensitive

console.log(re); // /hello/
console.log(re.source); // hello

// Regular Expression functions
// exec() - returns an array of items if there is a match or null if not

const result = re.exec('hello world'); //returns an array with the index of where the value of 're' which in this case 'hello' starts in the given string of the exec function, which is 0, lets say we have exec('eebru hello world'), the index would be 6. the 3 values in the array are [the expression; 'hello', its index; 0, and the input in the exec()]
console.log(result);
console.log(result[0]); //the expression
console.log(result.index); //its index 
console.log(result.input); //the input expression is searching from 

// test()  - returns true or false wheather or not there is a match

const result = re.test('Hello') //retruns false because of uppercase H, we can make the case of re insensitive by add adding a flag after thr expression forward slash like this:  re = /hello/i;

// match() - returns result array or null
const str = 'Hello There' 
const result = str.match(re); //gives the same result as the exec(), and now the we have included the case insensitivity in the re var, it returns the uppercase "Hello"


// search() - returns index of the first match, if not found, returns -1
const str = 'Hello There';
const result = str.match(re) // 0, if str = 'img Hello There' it'd be 3

// replace () - returns a new string with some or all matches of pattern

const str = 'Hello There';
const newStr = str.replace(re, 'Hi') //returns "HI there"; it finds the match of re and replace it with whatever is  passed in the replace
*/

///////////MetaCharacter Symbols

let re;
//Literal Characters
re = /hello/; //null because of case flag absense
re = /hello/i; //case insensitive flag

// MetaCharacters symbols
re = /^h/i; //means must start with the letter passed
re = /d$/i; // must end with: true if the string ends with the letter / word passed in
re = /^hello$/i; //means must start and end with the word/letter passed
re = /h.llo/i; //it defines one(any) character in the dot's spot but not more than 1 character
re = /h*llo/i; //matches any character 0 or more times in the spot the astericks is
re = /gra?e?y/i; // optional character: means the both characters are optional,you can either putor remove any of both
re = /gra?e?y\?/i; // escape character: it escapes the question mark,now if ? is not in the match it throws null
re = /gra?e?y\??/i; //optionated the ?

//BRACKET [] - CHARACTER SETS

re = /gr[ae]y/i; //must be a or e in that postion
re = /[GF]ray/; //must be G or F in that postion
re = /[^GFgf]ray/; //anything but G and F in that position, case insensitive without i
re = /^[GF]ray/i; // this is the must start with G/F format
re = /[A-Z]ray/; //matches any uppercase letter
re = /[a-z]ray/; //matches any lowercase letter
re = /[A-Za-z]ray/; //matches any case letter, any letter
re = /[0-9]ray/; //matches any digit: nb- we can pass as many numbers in its position, it would only see the last digit
re = /[0-9][0-9]ray/; //more than one digit

// BRACES {} - QUALIFIERS
re = /hel{2}o/i;  // l has to occur at the exact number passsed
re = /hel{2,5}o/i;  // l has to occur at the exact range of number passsed
re = /hel{2,}o/i;  // l has to occur at least the number passed times


// Parentheses () - grouping

re = /[0-9]x{3}/;  //produces any digit and xxx, but if we want any digit and x in 3 places;
re = /([0-9]x){3}/;  // but if we put more than any digit and x in 3 places, this would still work, if we want just exact digit and x in 3 places we write;
re = /^([0-9]x){3}$/;  


//Shorthand Character Classes

re = /\w/;      // matches word character: alphanumeric and _ : just one
re = /\w+/;     // matches word character: alphanumeric and _ one or more
re = /\W+/;     // matches matches non alphanumerics and _
re = /\d/;      // matches any digit : one
re = /\d+/;     // matche more than one digits
re = /\D+/;     // matches non-Digits
re = /\s/;      // matches whitespace only
re = /\S/;      // matches non-whitespace only
re = /Hell\b/i; //Word boundary : meaning it exact word in the match, not a word that includes the word

//Assertions
re = /x(?=y)/;  //matches x only if followed by y
re = /x(?!y)/;  //matches x only if NOT followed by y







// string to match
const str = "xyusnm hel";

// log Result
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
 if (re.test(str)) {
  console.log(`${str} matches ${re.source}`);
 } else {
  console.log(`${str} does NOT match ${re.source}`);
 }
}

reTest(re, str);
