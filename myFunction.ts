function addTwo(num:number):number{
    return num + 2;
}

addTwo(3); // This will return 5
// addTwo('3'); // This will cause a type error if strict mode is enabled

function getValue(myVal: number): string | boolean {
    // This function takes a number and returns either a string or a boolean
    if (myVal>5) {
        return true;
    }

    return '200 ok';
}



export {};