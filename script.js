// select the quotebox
const quoteBox = document.getElementById("quoteBox");

// list of prompts
const prompts = [
    "Write about a fun time in your childhood.",
    "Describe what you are feeling today.",
    "List 3 things you are grateful for.",
    "Write about 3 things you want to do for the year.",
    "Talk to me as if I was your protege."
];

//function that returns a random prompt
function randomPrompt() {
    const index = Math.floor(Math.random() * prompts.length);
    //in the id=quoteBox, change the text for the prompts!;
    quoteBox.textContent = prompts[index];
}

//select the button
const newQuoteBtn = document.getElementById('newQuoteBtn');

//add event listener
newQuoteBtn.addEventListener("click", randomPrompt);



