// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(result = "*") {
    const innerFunction = function (emphatic = "special") {
    return `You are ${result}${emphatic}${result}!`;
    };
    return innerFunction;
}