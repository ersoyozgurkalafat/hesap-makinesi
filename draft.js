const clear = (param) => {
  const currentIndex = operation.length - 1;
  if(operation[currentIndex].length > 1){
    operation[currentIndex].pop();
  }
  else if(operation[currentIndex].length == 1){
    operation.pop();
  }
};
