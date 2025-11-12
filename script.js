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

const reflectionPrompts = [
    "What stood out to me today, and why?",
    "What moment today felt meaningful, even if small?",
    "What challenged me today, and how did I respond?",
    "What energy did I wake up with vs end the day with?",
    "What conversation stayed in my head today?",
    "What emotion showed up the most today? Why that one?",
    "What did I handle well today?",
    "What did I avoid today, and what does that tell me?",
    "What felt easy today? Why?",
    "What did I overthink today?",
    "What drained me today?",
    "What gave me strength or clarity today?",
    "If today was a lesson, what was the topic?",
    "When did I feel most like my authentic self today?",
    "When did I feel disconnected from myself?",
    "What did I learn about someone else today?",
    "What did I learn about myself today?",
    "What am I proud of myself for doing today (even if tiny)?",
    "What pattern did I notice in my behaviour today?",
    "What thoughts repeated in my head today?",
    "How did I take care of my body today?",
    "How did I take care of my mind today?",
    "What would I do differently if I relived today?",
    "What surprised me today?",
    "What helped me feel grounded today?",
    "What felt unfinished today?",
    "What did I say “yes” to when I wanted to say “no”?",
    "What moment today would I like to remember a year from now?",
    "What moment today would I like to learn from — not regret?",
    "What is one thing I want to leave behind before tomorrow starts?"
];

//function that returns a random prompt
function randomPrompt() {
    const index = Math.floor(Math.random() * prompts.length);
    //in the id=quoteBox, change the text for the prompts!;
    quoteBox.textContent = prompts[index];
}
//function that selects a random prompt from REFLECTIONPROMPTS
function reflection () {
    const index = Math.floor(Math.random() * reflectionPrompts.length);
    quoteBox.textContent = reflectionPrompts[index];
    console.log(index);
}

//press the button then generate according to what's in the promptypes option.
const promptDropdown = document.getElementById('promptDropdown'); // select the promptSelect element
const selectedDropdown = promptDropdown.value; //get the value of the selected option


function generate (){
    if (promptDropdown.value === "reflection") {
        const index = Math.floor(Math.random() * reflectionPrompts.length);
        quoteBox.textContent = reflectionPrompts[index];
        console.log(index);    
        console.log("reflection option pressed"); 
    }
    else if (promptDropdown.value === "mindset") {
        const index = Math.floor(Math.random() * prompts.length);
        quoteBox.textContent = prompts[index];
        console.log(index);    
        console.log("prompts option pressed"); 
    }
    else {
        quoteBox.textContent = "Please select a prompt type.";
        console.log("No prompt type selected.");
    }
}


//select the button
const newQuoteBtn = document.getElementById('newQuoteBtn');
const reflectionBtn = document.getElementById('reflectionBtn');
const genBtn = document.getElementById('genBtn');

//add event listener
newQuoteBtn.addEventListener("click", randomPrompt);
reflectionBtn.addEventListener("click", reflection);
genBtn.addEventListener("click", generate);




