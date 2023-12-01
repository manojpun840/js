function handleCostKeyDown(event){
    if(event.key ==='Enter'){
        calculateTotal();
    }
}

function calculateTotal(){
    const inputElement=document.querySelector(".js-cost-input");
    // console.log(inputElement.value);/*inputElement.value gives us the text inside the text box.*/
    let cost = Number(inputElement.value);

    if (cost<40){
        cost += 10;
    }

    document.querySelector(".js-total-cost").innerHTML=`$${cost}`;
}