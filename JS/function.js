

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

            history(card_amount, card_input);
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


// history function......
function history(card_amount, card_input){
    console.log(card_input.parentElement.children[1]);


    // collect the title and time
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p")
    h1.innerText = `${card_input.value} Taka is ${card_input.parentElement.children[1].innerText}`
    p.innerText = `Date: ${new Date()}`;


    // append h1 and p to div
    div.append(h1,p);
    div.classList.add("history-div");


    // append in history
    let history = document.getElementById("History");
    history.prepend(div);
}