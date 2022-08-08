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

function reset(){
    numberActive = '';
    numberPrev = '';
    operation = '';
    display.innerHTML = 0;
}


function calculatorDisplay(){
    if(Number(numberActive) > 9999999999){
        display.innerHTML = 'Error';
    }else{
        display = document.querySelector('.result')
        display.innerHTML = numberActive.substring(0, 10);
    }

}

function operate(value){
    switch(true){

        case value >=0 || value <= 9:
            if(numberActive.length <= 9){
                numberActive = numberActive + value;
                calculatorDisplay();
            }

            break;

        case value === '.':
            if(!numberActive.includes('.')) {
                numberActive = numberActive + value;
                calculatorDisplay();
            }
            break;

        case value === '+/-':
            numberActive = String(numberActive * -1);
            calculatorDisplay();
            break;

        case value === '+' || value === '-' || 
            value === '*' || value === '/' || value === '%':
            if(operation === ''){
                numberPrev = numberActive;
                numberActive = '';
                operation = value;
            }else{
                if(operation === '+'){
                    numberActive= Add(numberPrev, numberActive);
                    calculatorDisplay();
                    numberPrev = numberActive;
                    numberActive = '';
                    operation = value;
                    
                    break;
                }
                if(operation === '-'){
                    numberActive= Substract(numberPrev, numberActive);
                    calculatorDisplay();
                    numberPrev = numberActive;
                    numberActive = '';
                    operation = value;
                    break;
                }
                if(operation === '*'){
                    numberActive= Multiply(numberPrev, numberActive);
                    calculatorDisplay();
                    numberPrev = numberActive;
                    numberActive = '';
                    operation = value;
                    break;
                }
                if(operation === '/'){
                    numberActive= Divide(numberPrev, numberActive);
                    calculatorDisplay();
                    numberPrev = numberActive;
                    numberActive = '';
                    operation = value;
                    break;
                }
                if(operation === '%'){
                    numberActive= Module(numberPrev, numberActive);
                    calculatorDisplay();
                    numberPrev = numberActive;
                    numberActive = '';
                    operation = value;
                    break;
                }
            }
            break;
        
        case value === '=':
            if(operation === '+'){
                numberActive = Add(numberPrev, numberActive); 
                calculatorDisplay();
                operation = ''
            } 
            if(operation === '-') {
                numberActive = Substract(numberPrev, numberActive);
                calculatorDisplay();
                operation = ''
            }
            if(operation === '*') {
                numberActive = Multiply(numberPrev, numberActive);
                calculatorDisplay();
                operation = ''
            }
            if(operation === '/') {
                numberActive = Divide(numberPrev, numberActive);
                calculatorDisplay();
                operation = ''
            }
            if(operation === '%') {
                numberActive = Module(numberPrev, numberActive);
                calculatorDisplay();
                operation = ''
            }

        break;

        case value === '<':
            if(operation !== ''){
                numberActive = numberActive.slice(0, -1);
                calculatorDisplay();
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