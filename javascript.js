function Add(num1, num2){
    let result = String(Number(num1) + Number(num2));
    return result;
}

function Substract(num1, num2){
    let result = String(Number(num1) - Number(num2));
    return result;
}

function Multiply(num1, num2){
    let result = String(Number(num1) * Number(num2));
    return result;
}

function Divide(num1, num2){
    if(num2 === 0) return 'Error'
    let result = String(Number(num1) / Number(num2));
    return result;
}

function Module(num1, num2){
    if(num2 === 0) return 'Error'
    let result = String(Number(num1) % Number(num2));
    return result;
}

function operate(value){
    switch(true){

        case value >=0 || value <= 9:
            numberActive = numberActive + value
            break;

        case value === '+/-':
            numberActive = numberActive * -1;
            break;

        case value === '+' || value === '-' || 
            value === '*' || value === '/' || value === '%':
            if(operation === ''){
                numberPrev = numberActive;
                numberActive = '';
                operation = value;
            }else{
                if(operation === '+'){
                    numberPrev = Add(numberPrev, numberActive);
                    numberActive = '';
                    operation = value;
                    console.log(numberPrev)
                    break;
                }
                if(operation === '-'){
                    numberPrev = Substract(numberPrev, numberActive);
                    numberActive = '';
                    operation = value;
                    console.log(numberPrev)
                    break;
                }
                if(operation === '*'){
                    numberPrev = Multiply(numberPrev, numberActive);
                    numberActive = '';
                    operation = value;
                    console.log(numberPrev)
                    break;
                }
                if(operation === '/'){
                    numberPrev = Divide(numberPrev, numberActive);
                    numberActive = '';
                    operation = value;
                    console.log(numberPrev)
                    break;
                }
                if(operation === '%'){
                    numberPrev = Module(numberPrev, numberActive);
                    numberActive = '';
                    operation = value;
                    console.log(numberPrev)
                    break;
                }
            }
            break;
                        
        default:

            break;

    }
}

var numberActive = '';
var numberPrev = '';
var operation = '';

btns = document.querySelectorAll('input')

btns.forEach(btn => btn.addEventListener('click', (e) =>{
    operate(e.target.value);
}))



/*document.querySelectorAll('.btnr2').forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e)
    })
}) */