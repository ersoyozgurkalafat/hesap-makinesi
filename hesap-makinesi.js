let operation = [];

const input = document.getElementById('inputArea')
input.innerText = operation.join(' ');

const checkOperator = (param) => {
    const operators = [
        '+',
        '-',
        '*',
        '/',
        '='
    ];
    const isOperator = operators.includes(param); // operator mü?
    if (isOperator) {
        return true;
    }
    else {
        return false;
    }
};

const clear = () => {
  const currentIndex = operation.length - 1;
  if(operation[currentIndex].length > 1){
    console.log('xasdada');
    operation[currentIndex] = operation[currentIndex].slice(0, -1);
  }
  else if(operation[currentIndex].length == 1){
     console.log('qqqqqq');
    operation.pop();
  }
  input.innerText = operation.join(' ');
};


const addParam = (param) => {
    if (param == 'C') {
        clear();
        return;
    };

    if (operation.length % 2 !== 1 && !checkOperator(param)) {
        operation.push(`${param}`);
        console.log(param);
        console.log(operation)
    }
    else if (operation.length % 2 == 1 && !checkOperator(param)) { // operator gelmiş 
        operation[operation.length - 1] += param;
    }
    else if (operation.length % 2 == 1 && checkOperator(param)) {
        if (param == '=') {
            let result = 0;

            operation.forEach((item, index) => {
                if (item == '+') {
                    result += Number(operation[index + 1]);
                }
                else if (item == '-') {
                    result -= Number(operation[index + 1]);
                }
                else if (item == '/') {
                    result /= Number(operation[index + 1]);
                }
                else if (item == '*') {
                    result *= Number(operation[index + 1]);
                }else if(index == 0) {
                    result += Number(item);
                };
            });

            for (let a = -1; a <= operation.length; a++) {
                operation.pop();
            }

            operation.push(`${result}`);
        }
        else {
            operation.push(param);
        }
    }
    input.innerText = operation.join(' ');
};




