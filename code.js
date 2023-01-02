maskMoney(inputValue){
  /* GET INPUT VALUE AND REPLACE ALL CHARACTERS OTHER THAN NUMBERS */
  if(inputValue === ''){
    inputValue = 0;
  }
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

  /* RETURN INPUT WITH THE MASK */
  return inputValue;
}

// THIS CODE RETURNS THE VALUE IN FLOAT IF NECESSARY -> parseFloat(inputValue.replace('.', '').replace(',', '.'));
