
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

let closestOnehundred = (num1, num2) =>
{
    this.num1 = num1;
    this.num2 = num2;
    let n1 = num1;
    let n2 = num2

   if(num1 >= 100)
   {
     n1 -= 100;
   }
   else{
    n1 = 100 - num1
   }
   if(num2 >= 100)
   {
    n2 -= 100;
   }
   else{
    n2 = 100 - num2
   }

   if(n1 < n2)
   {
    return num1
   }
   else{
    return num2
   }


}

let positive_negative = (num1, num2) => {
    this.num1 = num1;
    this.num2 = num2;
    if(num1 % 2 === 0 && num2 % 2 !== 0)
    {
        return true;
    }
    else if(num1 % 2 !== 0 && num2 % 2 === 0)
    {
        return true;
    };
    return false;
}

let guess = (guess) => {
    this.guess = guess;
    let num = Math.floor(Math.random() * 10);

    if(guess === num)
    {
        // return `Your guess of ${guess} is the same as the computers random integer`;
        return 'Good Work!';
    }
    else{
        // return `Your guess of ${guess} did not match the computers random integer of ${num}`;
        return 'Not Matched';
    };
}

let numVowels = (str) => {
    this.str = str;
    let count = 0;
    str = str.toUpperCase()
    for (i = 0; i < str.length; i++)
    {
        switch (str[i])
        {
            case 'A':
                count ++;
                break;
            case'E':
                count++;
                break;
            case'I':
                count++;
                break;
            case 'O':
                count++
                break;
            case 'U':
                count++;
                break;
            default:
                break;
        }
    }
    return count
}

let return50 = (num1 = 0, num2 = 0) => {
    this.num1 = num1;
    this.num2 = num2;

    if(num1 === 50 || num2 === 50)
    {
        return true;
    }
    else if((num1 + num2) === 50)
    {
        return true;
    }
    return false;
}
// console.log(capitalizeFirst('testing to see if works'));
// console.log(reverseString('This Is Reversed'))
// console.log(sortAlphabetically("JavaScript"))
// console.log(extractFirstHalf('test'))
// console.log(closestOnehundred(-5, 33))
// console.log(positive_negative(1,4))
// console.log(guess(5))
// console.log(numVowels('Apples'))
console.log(return50(10,50))