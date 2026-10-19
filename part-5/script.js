// Part 5: Table booking form
// Write ALL the JavaScript for this page here, from scratch.
// Do not copy code from your old projects or from the lessons.

const form=document.getElementById("booking-form");

let nameInput=document.getElementById("name");
let emailInput=document.getElementById("email");
let phoneInput=document.getElementById("phone");
let guestsInput=document.getElementById("guests");
let slot=document.getElementById("slot");
let notes=document.getElementById("notes");


let errorname=document.getElementById("name-error");
let erroremail=document.getElementById("email-error");
let errorphone=document.getElementById("phone-error");
let errorguests=document.getElementById("guests-error");
let errorslot=document.getElementById("slot-error");
let errornotes=document.getElementById("notes-error");


let whatsapp=document.getElementById("whatsapp-link");
whatsapp.classList.toggle("hidden");


function clearForm() {
  nameInput.value = "";
  emailInput.value = "";
    phoneInput.value = "";
  guestsInput.value = "";
    slot.value = "";
    notes.value="";
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

        
   errorname.textContent = "";
  erroremail.textContent = "";
  errorphone.textContent = "";
 errorguests.textContent = "";
errorslot.textContent = "";
errornotes.textContent = "";

        const  nameValue=nameInput.value;
        const emailValue=emailInput.value;
        const phoneValue=phoneInput.value;
        const guestsValue=guestsInput.value;
        const slotValue=slot.value;
        const notesValue=notes.value;

        let isValid = true;

    //validation Name
    if (nameValue.trim() === "") {
        errorname.textContent = "Name is required";
        isValid = false;
    }
    //validation email
    if (!emailValue.includes("@")){
    erroremail.textContent = "Email must contain @";
    isValid = false;
}
     //validation phone
     if (phoneValue.trim().length < 9) {
    errorphone.textContent = "Phone must be at least 9 characters";
    isValid = false;
}
    //validation guests
    if (guestsValue.trim().length < 6 === "") {
    errorguests.textContent = "An empty box is also wrong";
    isValid = false;
}
    //validation slot
    if (slotValue==="20:00") {
        errorslot.textContent="	the time 20:00 is full.";
    isValid = false;
}


if (isValid) {
    let summary=document.getElementById("summary");
    summary.textContent="Table for 4 at 19:00 booked for Sara.";
const message = `Hi, my name is ${nameInput}. I would like to book an appointment.
    My phone is ${phoneInput}.My guests is ${guestsInput}.My time is ${slot} and My requests are ${notes}.`;
    whatsapp.href =
    `https://wa.me/212600000000?text=${encodeURIComponent(message)}`;
    whatsapp.textContent = "Open WhatsApp with my booking";
}

});
form.addEventListener("input", () => {
localStorage.setItem("draftName", nameInput.value);
localStorage.setItem("draftEmail", emailInput.value);
localStorage.setItem("draftPhone", phoneInput.value);
localStorage.setItem("draftguests", guestsInput.value);
localStorage.setItem("draftslot", slot.value);
localStorage.setItem("draftnotes", notes.value);
});

const savedName = localStorage.getItem("draftName");
const savedEmail = localStorage.getItem("draftEmail");
const savedPhone = localStorage.getItem("draftPhone");
const savedguests = localStorage.getItem("draftguests");
const savedslot = localStorage.getItem("draftslot");
const savednotes = localStorage.getItem("draftnotes");



const removeName = localStorage.removeItem("draftName");
const removeEmail = localStorage.removeItem("draftEmail");
const removePhone = localStorage.removeItem("draftPhone");
const removeguests = localStorage.removeItem("draftguests");
const removeslot = localStorage.removeItem("draftslot");
const removenotes = localStorage.removeItem("draftnotes");

if (savedName) {
nameInput.value = savedName;
}
if (savedEmail) {
emailInput.value = savedEmail;


}