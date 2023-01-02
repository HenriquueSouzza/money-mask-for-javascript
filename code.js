/* GET INPUT VALUE AND REPLACE ALL CHARACTERS OTHER THAN NUMBERS */
let inputValue = event.detail.value === '' ? 0 : event.detail.value;
inputValue = inputValue + '';
inputValue = parseInt(inputValue.replace(/[\D]+/g, ''), 10);
inputValue = inputValue + '';

/* ADD ',' */
if(inputValue.length === 1){
  inputValue = inputValue.replace(/([0-9]{1})$/g, '0,0$1');
}else if(inputValue.length === 2){
  inputValue = inputValue.replace(/([0-9]{2})$/g, '0,$1');
} else {
  inputValue = inputValue.replace(/([0-9]{2})$/g, ',$1');
}

/* ADD '.' */
if (inputValue.length > 6) {
  inputValue = inputValue.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
}

/* SET THE INPUT WITH THE MASK */
this.inputValor.value = inputValue;


// THIS CODE RETURNS THE VALUE IN FLOAT IF NECESSARY -> parseFloat(inputValue.replace('.', '').replace(',', '.'));
