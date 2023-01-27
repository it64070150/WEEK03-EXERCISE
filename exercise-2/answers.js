function convertADtoBE(input) {
    if (typeof input === "string" || input < 0){
        return "ไม่ถูกต้อง";
    }
    else {

        return "พ.ศ. " + (input + 543)
    }
        
}

function evenOrOdd(input) {
    if (input%2 == 0 ){
        return "even";
    }else {
      return "odd"
    }
}

function getFullName(input) {
    if (input.sex == "male" ){
        return "Mr. " + input.firstName + " " + input.lastName;
    }
    else {
        return "Ms. " + input.firstName + " " + input.lastName;
    }

}

function getFirstName(input) {
    // TODO: ให้ทำการตัดนามสกุลออกโดยใช้ indexOf() และ substring()
    return input.substring(0, input.indexOf(" "));
}