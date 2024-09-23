

// nav bar amount function
function navAmount(amount,card_amount, card_input){
    let nav_amount = document.getElementById("nav-amount");
    let current_amount = nav_amount.innerText;
    let total_amount = parseInt(current_amount)-parseInt(amount);

    if(total_amount>=0){
        nav_amount.innerText = total_amount;

        // modal popup
        let modal_popup = document.getElementById("modal-popup");
        modal_popup.style.display = "flex";

        return true;
    }else{
        alert("You do not have sufficient balance!")
        return false;
    }
}


// card function
function card(button){

    // take index
    let attribute = button.getAttribute("id");
    let index = attribute[attribute.length-1];


    // select input and span amount
    let card_input = document.getElementById(`card-input-${index}`);
    let card_amount = document.getElementById(`card-amount-${index}`);

    // condition
    if(parseInt(card_input.value)>0){
        let result = navAmount(card_input.value);
        if(result){
            cardAmount(card_amount, card_input);
        }
    }else{
        alert("Invalid Dotation Amount!!!");
    }
}


// function add card amount
function cardAmount(card_amount, card_input){
    let current_amount = card_amount.innerText;
    let total_amount = parseInt(current_amount)+parseInt(card_input.value);
    card_amount.innerText = total_amount;
}