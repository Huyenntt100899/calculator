const updateScreen = (value, replace) => {
    const resultEl = document.getElementById('result')
    replace ? resultEl.innerHTML = value : resultEl.innerHTML += value;
}

function is(char){
    if (char === '-' || char === '+' || char === 'x' || char === '÷'){
        return true
    }
    return false
}

// 1 function chi lam duy nhat 1 viec
