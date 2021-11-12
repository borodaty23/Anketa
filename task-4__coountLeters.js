let getCountLetters = function(){
    let countLetters = 0;
    let str = prompt("введите рандомную строку на русском языке");
    let strLOwerCase = str.toLowerCase();
    for (let i = 0; i < str.length; i++ ){
    if (strLOwerCase[i] === "а" || strLOwerCase[i] === "у" || strLOwerCase[i] === "о" || strLOwerCase[i] === "и" || strLOwerCase[i] === "э" || strLOwerCase[i] === "ы" || strLOwerCase[i] === "я" || strLOwerCase[i] === "ю" || strLOwerCase[i] === "е" || strLOwerCase[i] === "ё"){
    countLetters += 1
    }
    }
    return countLetters;
    }
    getCountLetters()