const resultEl = document.getElementById('result');

const calculate = (value, type) => {

    switch (type) {
        case BUTTON_TYPES.NUMBER: {
            if (resultEl.innerHTML === '0') {
                resultEl.innerHTML = '';
            }
            const replace = false;
            updateScreen(value, replace);
            break;
        }
        case BUTTON_TYPES.OPERATORS: {
            const currentResult = resultEl.innerHTML;
            if (currentResult.length > 1){
                const secondCharacter = currentResult[currentResult.length -2];
                console.log(secondCharacter);
                const lastCharacter = currentResult.slice(-1);

                if (  is(secondCharacter) == false
                    && value === '-' 
                    &&  is(lastCharacter) == true
                ) {
                    const newResult = currentResult + value;
                    updateScreen(newResult, true);
                    return
                }else if ( is(secondCharacter) == true
                && lastCharacter === '-' ){
                    return
                } 
            } 
            const lastCharacter = currentResult.slice(-1);

            if (is(lastCharacter) == true) {
                    const newResult = currentResult.slice(0, -1) + value;
                    console.log(newResult);
                    updateScreen(newResult, true);
                    return
            } 

            updateScreen(value, false);

            break;
        }
        case BUTTON_TYPES.EQUAL: {
            let res = resultEl.innerHTML;
            const secondCharacter = res.slice(-1);

            if (secondCharacter === '-' || secondCharacter === '+' || secondCharacter === 'x' || secondCharacter === '÷') {
                return
            }
            let output = eval(res.replaceAll('x', '*').replaceAll('÷', '/').replaceAll('--', '+'));
            updateScreen(output, true);
            break;
        }
        case BUTTON_TYPES.ALLCLEAR: {
            const replace = true;
            updateScreen(0, replace);
            break;
        }
    }
};



