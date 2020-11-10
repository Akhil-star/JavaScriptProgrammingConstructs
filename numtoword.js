let num = 7569
let th,h,t,u;
 u = num % 10;
 t = num % 100;
 h = num % 1000;
 th = num % 100000;

 console.log("Thousands = %d, Hundreds = %d, Tens = %d , Units = %d\n",th,h,t,u);