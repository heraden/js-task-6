 function check(customer) {
     const { name, age, numOrders, orderAmounts } = customer;
     const total = orderAmounts.reduce((acc, cur) => acc + cur, 0);
  
    if (age >= 60 || (numOrders >= 4 && total >= 100)) {
      return ${name}true;
     } else {       return ${name}  false ;
    }
   }
   const customer = {
     name: "Turkan",
     age: 65,
     numOrders: 5,
     orderAmounts: [30, 20, 40, 10, 25]
   };
  
   console.log(check(customer));
