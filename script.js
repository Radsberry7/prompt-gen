// select the quotebox
const quoteBox = document.getElementById("quoteBox");

// list of prompts in their types

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

const mindsetPrompts = [
    "What belief held me back today?",
    "What belief helped me move forward today?",
    "What would I try if I wasn't afraid of failing?",
    "How am I already further than I was last year?",
    "What am I learning to tolerate better?",
    "What evidence do I have that I'm improving?",
    "What is something I used to struggle with that is now easier?",
    "What is something I thought was scary that I now handle well?",
    "What would my future self want me to focus on today?",
    "What does “progress” look like right now — not perfection?",
    "In what area of life do I need more patience?",
    "What identity am I growing into?",
    "Where am I holding onto outdated self-definitions?",
    "What is one mindset I want to practice this week?",
    "What would my confident self do in this situation?",
    "What is something I get to do (not have to)?",
    "What did I misunderstand about success when I was younger?",
    "What am I willing to be a beginner at?",
    "What thought do I want to retire permanently?",
    "What is one thing I want to believe about myself, fully?",
    "What does “improvement” mean to me — not society?",
    "Where do I need more grace with myself?",
    "Where do I need more discipline with myself?",
    "What is a thought I want to rehearse instead of the old one?",
    "What did I almost talk myself out of, but did anyway?",
    "How would I speak to myself if I were someone I loved?",
    "What does “enough” look like for me right now?",
    "What is something I want to start thinking differently about?",
    "What do I fear people might judge me for — and why does it matter?",
    "What am I unlearning right now?"
];

const gratitudePrompts = [
    "Three small things I'm grateful for today.",
    "Something that went right today — even if by accident.",
    "Someone who made my life easier today.",
    "Something I take for granted that others may not have.",
    "A part of my body I'm grateful for and why.",
    "A skill I'm glad I have.",
    "A mistake I'm grateful I made because it taught me ___.",
    "One thing I saw, heard, or felt today that was beautiful.",
    "What I'm grateful for about my past self.",
    "What I'm grateful for about my present self.",
    "What I'm grateful for about my future self.",
    "A challenge in my life that is secretly helping me grow.",
    "Someone I am glad exists, even if I didn't see them today.",
    "A comfort I had today (food, blanket, quiet, etc.).",
    "A moment of laughter or relief today.",
    "Something I learned that I'm grateful for.",
    "Something I used to pray/hope for that I now have.",
    "A routine or habit that supports me.",
    "Something from nature I'm grateful for today.",
    "Something in my home I'm thankful to have.",
    "A decision I'm grateful I made.",
    "A person who has supported me in the past.",
    "Something about my personality that helps me.",
    "A time I surprised myself in a good way.",
    "A comfort item I own (object, place, smell, etc.).",
    "Something I'm grateful I didn't say or do.",
    "Someone who inspires me from a distance.",
    "A challenge I used to face that no longer controls me.",
    "A tiny joy today (warm drink, message, sunlight, music, etc.).",
    "I'm grateful I lived through today because…",
];

const shadowPrompts = [
    "What emotion do I suppress most often? Why?",
    "What kind of people trigger me the most? What do they reflect?",
    "What trait do I judge harshly in others — and do I carry it too?",
    "What do I fear others might discover about me?",
    "When do I feel “not enough”? What belief is behind that?",
    "What do I pretend not to care about, but actually do?",
    "What do I criticize in others that I secretly wish I had more of?",
    "What part of myself do I try to “fix” instead of understand?",
    "What am I afraid would happen if I stopped being “strong”?",
    "What do I need the most but struggle to ask for?",
    "What part of me is tired of performing for others?",
    "When do I get defensive? What part of me is being protected?",
    "What am I most ashamed of wanting?",
    "Who do I envy — and what does that envy teach me about myself?",
    "What need of mine hasn't been met in a long time?",
    "What does my anger usually try to say?",
    "What do I judge as “weakness” in myself, and why?",
    "When did I last abandon myself to please someone else?",
    "What version of me is still waiting to be acknowledged?",
    "What do I blame myself for that maybe wasn't fully my fault?",
    "How do I try to control situations when I feel unsafe?",
    "What feeling do I avoid because it feels too big?",
    "What habit is actually a coping mechanism in disguise?",
    "What part of my past still affects my present reactions?",
    "What would I do differently if I truly believed I was safe?",
    "What mask do I wear around others?",
    "What does my inner critic sound like — and who taught me that voice?",
    "What do I secretly wish people would stop expecting from me?",
    "What part of me wants rest but isn't being heard?",
    "What would happen if I allowed myself to be fully honest today?",
]

// ALL THE PROMPTS ARRAYS!
const allPrompts = reflectionPrompts.concat(mindsetPrompts, gratitudePrompts, shadowPrompts);

//press the button then generate according to what's in the promptypes option.
const promptDropdown = document.getElementById('promptDropdown'); // select the promptSelect element
const selectedDropdown = promptDropdown.value; //get the value of the selected option


function generatePrompt (){
    if (promptDropdown.value === "reflection") {
        const index = Math.floor(Math.random() * reflectionPrompts.length);
        quoteBox.textContent = "Reflection Prompt: " + reflectionPrompts[index];
        console.log(index);    
        console.log("reflection option pressed"); 
    }
    else if (promptDropdown.value === "mindset") {
        const index = Math.floor(Math.random() * mindsetPrompts.length);
        quoteBox.textContent = "Mindset Prompt: " +mindsetPrompts[index];
        console.log(index);    
        console.log("Mindset option pressed"); 
    }
    else if (promptDropdown.value === "gratitude") {
        const index = Math.floor(Math.random() * gratitudePrompts.length);
        quoteBox.textContent = "Gratitude Prompt: " +gratitudePrompts[index];
        console.log(index);    
        console.log("Gratitude option pressed"); 
    }
    else if (promptDropdown.value === "shadowWork") {
        const index = Math.floor(Math.random() * shadowPrompts.length);
        quoteBox.textContent = "Shadow Work Prompt: " + shadowPrompts[index];
        console.log(index);    
        console.log("Shadow Work option pressed"); 
    }
    else {
        quoteBox.textContent = "Please select a prompt type.";
        console.log("No prompt type selected.");
    }
}

function generateRandom () {
        const index = Math.floor(Math.random() * allPrompts.length);
        quoteBox.textContent = allPrompts[index];
        console.log(index);    
        console.log("Random Button has been pressed"); 
}

//select the buttons
const genBtn = document.getElementById('genBtn');
const randomBtn = document.getElementById('randomBtn');

//add event listener
genBtn.addEventListener("click", generatePrompt);
randomBtn.addEventListener("click", generateRandom);




