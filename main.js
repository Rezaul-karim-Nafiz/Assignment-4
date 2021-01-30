//=======   All Click Events   =======//
document.getElementById('economyIncrease').addEventListener('click', function(){
    handleTicketChange('economy', true);
});
document.getElementById('economyDecrease').addEventListener('click', function(){
    handleTicketChange('economy', false);
});
document.getElementById('firstClassIncrease').addEventListener('click', function(){
    handleTicketChange('firstClass', true);
});
document.getElementById('firstClassDecrease').addEventListener('click', function(){
    handleTicketChange('firstClass', false);
});

//=======   All Click Event Handler   =======//
function handleTicketChange(ticket, isIncrease) {
    const ticketItemInput = document.getElementById(ticket +'ItemCount');
    const ticketItemCount = parseInt(ticketItemInput.value);

    let ticketItemNewCount = ticketItemCount;
    if(isIncrease == true){
        ticketItemNewCount = ticketItemCount + 1;
    }
    if(isIncrease == false && ticketItemCount > 0){
        ticketItemNewCount = ticketItemCount - 1;
    }
    ticketItemInput.value = ticketItemNewCount;

    let ticketTotal = 0;
    if(ticket == 'firstClass'){
        ticketTotal == ticketItemNewCount * 150;
    }
    if( ticket == 'economy'){
        ticketTotal == ticketItemNewCount * 100;
    }

    calculateTotal();
}

//=======   Calculation Of Total Sum   =======//
function calculateTotal() {
    const firstClassItemCount = takeInputValue('firstClass');
    const economyItemCount = takeInputValue('economy');
    
    const totalPrice = firstClassItemCount * 150 + economyItemCount * 100;
    document.getElementById('totalCost').innerText ='$'+ totalPrice;

    const vat = totalPrice * 0.1;
    document.getElementById('vatAmount').innerText = '$' + vat;

    const payableAmount = totalPrice + vat;
    document.getElementById('payableAmount').innerText = payableAmount;
}

//=======   Gathered Input Value Of All Tickets To Calculate   =======//
function takeInputValue(ticket) {
    const ticketInput =  document.getElementById(ticket + 'ItemCount');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}








