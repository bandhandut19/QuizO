const quizData=[ {
    question: "Who is the founder of BRAC?",
    a:"Tamara Hasan Abed",
    b: "Fazle Hasan Abed",
    c: "Syeda Rizwana Hasan",
    d: "Shafiqul Hasan Abed",
    correct:"b",
},
{
    question: "What is the full form of BRAC?",
    a: "Bangladesh Rural Advancement Coorporation",
    b: "Bangladesh Rural Advancement Council",
    c: "Bangladesh Rural Advancement Community",
    d: "Bangladesh Rural Advancement Committee",
    correct:"d",
},
{
    question: "When BRAC University started it's journey?",
    a:"2002",
    b: "2001",
    c: "1999",
    d: "2003",
    correct:"b",
},
{
    question: "Who is the current DEAN of CSE department (2022) ?",
    a:"Md. Golam Rabiul Alam",
    b: "Amitabha Chakrabarty",
    c: "Muhammad Nur Yanhaona",
    d: "Mahbubul Alam Majumdar",
    correct:"d",
},
];
const quiz = document.getElementById("quiz");
const answerElements=document.querySelectorAll(".answer");
const questionElement=document.getElementById("question");

const a_text =document.getElementById("a_text");
const b_text =document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const d_text =document.getElementById("d_text");

const submitButton= document.getElementById("submit");

let currentQuiz=0;
let score=0;

const deselectAnswers=() => {
    answerElements.forEach((answer) => (answer.checked=false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if(answerElement.checked)answer= answerElement.id;
    });
    return answer;
};

const loadQuiz=() => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
};

loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer){
        if (answer === quizData[currentQuiz].correct)
score++;
        currentQuiz++;
        if (currentQuiz < quizData.length)loadQuiz();
        else{
            quiz.innerHTML= ` <h2> You answered ${score}/${quizData.length} questions correctly </h2>
            <button onclick = "history.go(0)">Play Again </button>`
        }
    }
});