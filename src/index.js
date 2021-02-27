module.exports = function toReadable(number) {
    let numStr = number.toString();
    let length = numStr.length;
    let result;
    let oneToTen = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }

    let elevenToTwenty = {
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
    }

    let tens = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    switch (length) {
        case 1:
            result = oneToTen[number];
            break;
        case 2:
            if (number >= 20 || number === 10) {
                result = number % 10 === 0 ? tens[numStr[0]] :
                    tens[numStr[0]] + ' ' + oneToTen[numStr[1]];
            } else {
                result = elevenToTwenty[numStr[1]];
            }
            break;
        case 3:
            if (number >= 100) {
                if (number % 100 === 0) {
                    result = oneToTen[numStr[0]] + ' ' + 'hundred';
                } else if (number % 100 < 20 && number % 100 > 10) {
                    result = oneToTen[numStr[0]] + ' ' + 'hundred' + ' ' + elevenToTwenty[numStr[2]];
                } else if (number % 100 < 10) {
                    result = oneToTen[numStr[0]] + ' ' + 'hundred' + ' ' + oneToTen[numStr[2]];
                } else {
                    let ten = number % 10 === 0 ? tens[numStr[1]] :
                        tens[numStr[1]] + ' ' + oneToTen[numStr[2]];
                    result = oneToTen[numStr[0]] + ' ' + 'hundred' + ' ' + ten;
                }
            }
    }
    return result;
}
