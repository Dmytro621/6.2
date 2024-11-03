let test = [1, 2, 'lalla', true,3, 4, 'hi', 5]

function sum() {
    let num = test
        .filter(filt => typeof filt === 'number');

    let result = num
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / num.length;
    
    console.log(result)
    return
}

sum()