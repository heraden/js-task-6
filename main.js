 function savingInformation() { 
     const customerName = prompt("Enter name"); 
    const customerAge = prompt("Enter age"); 
     const ordersNumber = prompt("Enter number of order"); 
    const ordersAmount  = prompt("Enter amount of order"); 
    if (ordersAmount>=100 && ordersNumber>=4 && customerAge>60 ) { 
         console.log("Receives a discount") 
     }else{ 
        console.log("Do not receive a discount") 
     } 
 } 
 savingInformation(); 