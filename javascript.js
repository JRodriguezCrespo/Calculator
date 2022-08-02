function Add(num1, num2){
    return num1 + num2;
}

function Substract(num1, num2){
    return num1 - num2;
}

function Multiply(num1, num2){
    return num1 * num2;
}

function Divide(num1, num2){
    if(num2 === 0) return 'Error'
    return num1 / num2;
}

function operate(value){
    switch(true){

        case value >=0 || value <= 9:
            console.log(23)
            break;
        
        case 233:
            console.log(22)
            break;
            
        default:
            console.log(11)

    }
}

var number1 = '';
var number2 = '';

btns = document.querySelectorAll('input')

btns.forEach(btn => btn.addEventListener('click', (e) =>{
    operate(e.target.value);
}))



/*document.querySelectorAll('.btnr2').forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e)
    })
}) */