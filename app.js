// Write a program to capitalize first letter of each word in a string
let capitalizeFirst = (string) => {
    this.string = string ;
    let arr = string.split(" ");
    let new_arr = [];
    for (let i = 0; i < arr.length; i++)
    {
        let txt = arr[i];
        let newstr = '';
        for(let i = 0; i < txt.length; i++)
        {
            if(i === 0)
            {
                newstr += txt[i].toUpperCase();
            }
            else{
                newstr += txt[i];
            };
        };
        new_arr.push(newstr);
    };
    let returnstr = '';
    for (let i = 0; i < new_arr.length; i++)
    {
        returnstr += (new_arr[i] + ' ');
    };
    return returnstr;
}

//  Reverse a given string
let reverseString = (string) => {
    this.string = string;
    let reversed = "";
    for (i = string.length - 1; i >= 0; i--)
    {
        reversed += string[i];
    };
    return reversed;
}

let sortAlphabetically = (string) => {
    this.string = string;
    return string.split("").sort().join("");
}

let extractFirstHalf = (string) => {
    this.string = string;
    if(this.string.length % 2 !== 0)
    {
        return "String is not even";
    }
    else{
        let len = string.length / 2;
        return string.slice(0, len);
    };
}
// console.log(capitalizeFirst('testing to see if works'));
// console.log(reverseString('This Is Reversed'))
// console.log(sortAlphabetically("JavaScript"))
console.log(extractFirstHalf('test'))