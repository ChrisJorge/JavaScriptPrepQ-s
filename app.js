let capitalizeFirst = (string = "") => {
    this.string = string ;

    if(typeof(string) !== 'string')
    {
        return 'Invalid: Input is not a string'
    }

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

let reverseString = (string = " ") => {
    this.string = string;
    let reversed = "";

    if(typeof(string) !== 'string')
    {
        return 'Invalid: Input is not a string'
    }

    for (i = string.length - 1; i >= 0; i--)
    {
        reversed += string[i];
    };
    return reversed;
}

let sortAlphabetically = (string = "") => {
    this.string = string;
    if(typeof(string) !== 'string')
    {
        return 'Invalid: Input is not a string'
    }
    return string.split("").sort().join("");
}

let extractFirstHalf = (string = "") => {
    this.string = string;

    if(typeof(string) !== 'string')
    {
        return 'Invalid: Input is not a string'
    }
    if(this.string.length % 2 !== 0)
    {
        return "String is not even";
    }
    else{
        let len = string.length / 2;
        return string.slice(0, len);
    };
}

let closestOnehundred = (num1 = 0, num2 = 0) =>
{
    this.num1 = num1;
    this.num2 = num2;

    if(typeof(num1) !== 'number' || typeof(num2) !== 'number')
    {
        return 'Invalid input: Both inputs are not numbers'
    }
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

let positive_negative = (num1 = 0, num2 = 0) => {
    this.num1 = num1;
    this.num2 = num2;

    if(typeof(num1) !== 'number' || typeof(num2) !== 'number')
    {
        return 'Invalid input: Both inputs are not numbers'
    }

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

    if(typeof(guess) !== 'number')
    {
        return 'Invalid Guess: Guess must be a number'
    }
    else if (guess < 0 || guess > 10){
        return 'Invalid Guess: Guess must be between 0-10'
    }
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

let numVowels = (str = '') => {
    this.str = str;

    if(typeof(str) !== 'string')
    {
        return 'Invalid: Input is not a string'
    }

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

    if(typeof(num1) !== 'number' || typeof(num2) !== 'number')
    {
        return 'Invalid input: Both inputs are not numbers'
    }

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

let sumOfTwo = (num1 = 0, num2 = 0) => {
    this.num1 = num1;
    this.num2 = num2;

    if(typeof(num1) !== 'number' || typeof(num2) !== 'number')
    {
        return 'Invalid input: Both inputs are not numbers'
    }

    if(num1 === num2)
    {
        return ((num1 + num2) * 3);
    }
    return (num1 + num2);
}

let rightDirection = (str = '', amount = 0) => {
    this.str = str;
    this.amount = amount;

    if(typeof(str) !== 'string' || typeof(amount) !== 'number')
    {
        return 'Invalid Input: First paramater must be string, second must be number'
    }

    amount = amount % str.length;
    if(amount < 0){
        amount = str.length + amount;
    }

    return (str.slice(-amount) + str.slice(0, -amount));
}

let removeChar = (str = '', char = '') => {
    this.str = str
    this.char = char

    if(typeof(str) !== 'string' || typeof(char) !== 'string')
    {
        return 'Invalid Input: Both parameters must be strings'
    }
    let arr = [];
    let returnstr = "";
    if (char > str.length - 1)
    {
        return 'Invalid index'
    }

    for(i = 0; i < str.length; i++)
    {
        if(i === char)
        {
            continue
        }
        arr.push(str[i])
    }
    for(i = 0; i < arr.length; i++)
    {
        returnstr += arr[i]
    }

    return returnstr;
}

let replaceCharacters = (str) => {
    this.str = str;

    if(typeof(str) !== 'string')
    {
        return 'Invalid: Input must be a string'
    }
    str = str.toLowerCase();
    let arr = [];
    let returnstr = "";

    for(i = 0; i < str.length; i++)
    {
        switch (str[i])
        {
            case 'a':
                arr.push('b');
                break;
            case 'b':
                arr.push('c');
                break;
            case 'c':
                arr.push('d');
                break;
            case 'd':
                arr.push('e')
                break;
            case 'e':
                arr.push('f')
                break;
            case 'f':
                arr.push('g')
                break;
            case 'g':
                arr.push('h')
                break;
            case 'h':
                arr.push('i')
                break;
            case 'i':
                arr.push('j')
                break;
            case 'j':
                arr.push('k')
                break;
            case 'k':
                arr.push('l')
                break;
            case 'l':
                arr.push('m')
                break;
            case 'm':
                arr.push('n')
                break;
            case 'n':
                arr.push('o')
                break;
            case 'o':
                arr.push('p')
                break;
            case 'p':
                arr.push('q')
                break;
            case 'q':
                arr.push('r')
                break;
            case 'r':
                arr.push('s')
                break;
            case 's':
                arr.push('t')
                break;
            case 't':
                arr.push('u')
                break;
            case 'u':
                arr.push('v')
                break;
            case 'v':
                arr.push('w')
                break;
            case 'w':
                arr.push('x')
                break;
            case 'x':
                arr.push('y')
                break;
            case 'y':
                arr.push('z')
                break;
            case 'z':
                arr.push('a')
                break;
            default:
                arr.push(str[i])
                break;
        }
    }
    for(i = 0; i < arr.length; i++)
    {
        returnstr += arr[i]
    }
    return returnstr
}

let sumDif15 = (num1 = 0, num2 = 0) => {
    this.num1 = num1;
    this.num2 = num2;

    if(typeof(num1) !== 'number' || typeof(num2) !== 'number')
    {
        return 'Invalid input: Both inputs are not numbers'
    }

    if(num1 === 15 || num2 === 15)
    {
        return true
    }
    else if ((num1 + num2) === 15)
    {
        return true
    }
    else if ((num1 - num2) === 15)
    {
        return true
    }
    else {
        return false;
    }
}

let middleArrays = (arr1 = [], arr2 = []) => {
    this.arr1 = arr1 
    this.arr2 = arr2
    
    if(typeof(arr1) !== 'object' || typeof(arr2) !== 'object')
    {
        return 'Invalid both variables are not arrays'
    }

    let returnarr = []
    let even1 = false 
    let even2 = false

    if (arr1.length % 2 === 0)
    {
        even1 = true
    }

    if (arr2.length % 2 === 0)
    {
        even2 = true;
    }

if(arr1.length > 0)
{
        if(even1)
        {
            for(i = (arr1.length / 2) - 1; i <= arr1.length / 2; i++)
            {
                returnarr.push(arr1[i])
            }
        }
        else{
            returnarr.push(arr1[Math.floor((arr1.length) / 2)])
        }
}
    
if(arr2.length > 0)
{
    if(even2)
    {
        for(i = (arr2.length / 2) - 1; i <= arr2.length / 2; i++)
        {
            returnarr.push(arr2[i])
        }
    }
    else{
        returnarr.push(arr2[Math.floor((arr2.length) / 2)])
    }
}
    return returnarr
}

let daysUntilChristmas = (date = "") => {
     this.date = date

     if(typeof(date) !== 'string')
     {
        return 'Invalid: Input must be a string'
     }
     let month = ""
     let day = ""

     let calendar = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31, 
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
     }
     let dayspassed = 0
     if(date.length === 5 || date.length === 10)
     {
        for(let i = 1; i < 2; i++)
        {
            console.log(date[i])
            month += date[i]
        }
        
        for(let i = 3; i < 5; i++ )
        {
            day += date[i]
        }

        if(calendar[Number(month)] < Number(day)){
            return `Invalid days for the month`
        }

        for(let i = 1; i < Number(month); i++)
        {
            dayspassed += calendar[i]
        }

        
        dayspassed += Number(day)
        calendar[Number(month)] = ((calendar[Number(month)]) - Number(day))

        
     }
     else{
        return 'Invalid Format have date as mm-dd-yyyy or mm-dd'
     }
     
     return(`${365 - dayspassed} days until Christmas`)
}

let mergeArr = (arr1 = [], arr2 = []) => {
    this.arr1 = arr1;
    this.arr2 = arr2;
    let returnArr = []
    let index = 0

    for(i = 0; i < arr1.length && i < arr2.length; i++)
    {
        returnArr.push(arr1[i])
        returnArr.push(arr2[i])
        index += 1
    }

    if(arr1.length > arr2.length)
    {
        for(i = index; i < arr1.length; i++)
        {
            returnArr.push(arr1[i])
        }
    }
    else if(arr2.length > arr1.length)
    {
        for(i = index; i < arr2.length; i++)
        {
            returnArr.push(arr2[i])
        }
    }

    return returnArr

}

console.log(mergeArr([1,2,3], [4,5]))
// console.log(capitalizeFirst('testing to see if works'));
// console.log(reverseString('This Is Reversed'))
// console.log(sortAlphabetically("JavaScript"))
// console.log(extractFirstHalf('test'))
// console.log(closestOnehundred(-5, 33))
// console.log(positive_negative(1,4))
// console.log(guess(5))
// console.log(numVowels('Apples'))
// console.log(return50(10,50))
// console.log(sumOfTwo(2,2))
// console.log(sumOfTwo(2,6))
// console.log(rightDirection('w3resource', 3))
// console.log(removeChar('Hello World', 0))
// console.log(replaceCharacters('ab'))
// console.log(replaceCharacters('All Letters will be replaced'))
// console.log(sumDif15(10,5))
// console.log(middleArrays([1,2,3,5,6], [1,2,3,4]))
// console.log(daysUntilChristmas('03/11/2024'))