
// donate card
let card_btn = document.querySelectorAll(".btn");
for(let btn of card_btn){
    btn.addEventListener("click",()=>{
        card(btn);
    })
}


// model popup
let close_modal = document.getElementById("close-modal");
close_modal.addEventListener("click",()=>{
    let modal_popup = document.getElementById("modal-popup");
    modal_popup.style.display = "none";
});
window.addEventListener("click",(event)=>{
    let modal_popup = document.getElementById("modal-popup");

    if(event.target == modal_popup){
        modal_popup.style.display = "none"; 
    }
})


// history and donation button activation...
let header_btn = document.querySelectorAll(".header-btn");
let btn_section = document.querySelectorAll(".btn-section");
for(let btn of header_btn){
    btn.addEventListener("click",()=>{
        header_btn.forEach((button)=>{
            button.classList.add("history");
        });
        btn.classList.toggle("history");

        for(let section of btn_section){
            section.classList.add("hidden");
        }
        let section = document.getElementById(`${btn.innerText}`);
        section.classList.remove("hidden");
    })
}