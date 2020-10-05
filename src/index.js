module.exports = function toReadable(number) {
    let result = '';
    let hundreds = Math.trunc(number / 100);
    let dozens = Math.trunc(number / 10) - hundreds * 10;
    let unit = number - hundreds * 100 - dozens * 10;
    if (hundreds) {
        result = getHundredsAndUnits(hundreds) + ' hundred';
    }
    if (dozens) {
        if (dozens === 1) {

            result = (result === '' ? result : result + ' ') + get1Dozen(unit);
        } else {
            result = (result === '' ? result : result + ' ') + getDozens(dozens);
        }
    }
    if ((dozens !== 1 && unit !== 0) || number < 10) {
        result = (result === '' ? result : result + ' ') + getHundredsAndUnits(unit);
    }
    return result;
}

function getHundredsAndUnits(number) {
    switch (number) {
        case 0: {
            return 'zero';
        }
        case 1: {
            return 'one';
        }
        case 2: {
            return 'two';
        }
        case 3: {
            return 'three';
        }
        case 4: {
            return 'four';
        }
        case 5: {
            return 'five';
        }
        case 6: {
            return 'six';
        }
        case 7: {
            return 'seven';
        }
        case 8: {
            return 'eight';
        }
        case 9: {
            return 'nine';
        }
        default: {
            return;
        }

    }
}

function getDozens(number) {
    switch (number) {
        case 2: {
            return 'twenty';
        }
        case 3: {
            return 'thirty';
        }
        case 4: {
            return 'forty';
        }
        case 5: {
            return 'fifty';
        }
        case 6: {
            return 'sixty';
        }
        case 7: {
            return 'seventy';
        }
        case 8: {
            return 'eighty';
        }
        case 9: {
            return 'ninety';
        }
        default: {
            return;
        }

    }
}

function get1Dozen(number) {
    switch (number) {
        case 0: {
            return 'ten';
        }
        case 1: {
            return 'eleven';
        }
        case 2: {
            return 'twelve';
        }
        case 3: {
            return 'thirteen';
        }
        case 4: {
            return 'fourteen';
        }
        case 5: {
            return 'fifteen';
        }
        case 6: {
            return 'sixteen';
        }
        case 7: {
            return 'seventeen';
        }
        case 8: {
            return 'eighteen';
        }
        case 9: {
            return 'nineteen';
        }
        default: {
            return;
        }

    }
}
