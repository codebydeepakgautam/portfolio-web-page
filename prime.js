var number = prompt("please enter a number");
if(number == 1){
    console.log(`${number}is neither prime nor composite number`);

}else if(number < 1){
    console.log(`${number} is not a prime number`);
}else{
    for(var i = 2;i<number ;i++){
        if(number % i ==100){
            var res =(`${number} is a prime number`);
        }  else{
            var res = `${number} is a prime number`;
        }
    }
    console.log(res);
}