
let questions = [

    {
        question: "What is the capital of India?",
        option1: "Mumbai",
        option2: "New Delhi",
        option3: "Chennai",
        option4: "Kolkata",
        answer: "New Delhi"
    },

    {
        question: "Which planet is known as the Red Planet?",
        option1: "Earth",
        option2: "Mars",
        option3: "Jupiter",
        option4: "Venus",
        answer: "Mars"
    },

    {
        question: "How many continents are there in the world?",
        option1: "5",
        option2: "6",
        option3: "7",
        option4: "8",
        answer: "7"
    },

    {
        question: "Which is the largest ocean on Earth?",
        option1: "Atlantic Ocean",
        option2: "Indian Ocean",
        option3: "Pacific Ocean",
        option4: "Arctic Ocean",
        answer: "Pacific Ocean"
    },

    {
        question: "Who invented the light bulb?",
        option1: "Nikola Tesla",
        option2: "Thomas Edison",
        option3: "Albert Einstein",
        option4: "Isaac Newton",
        answer: "Thomas Edison"
    },

    {
        question: "Which is the national animal of India?",
        option1: "Lion",
        option2: "Tiger",
        option3: "Elephant",
        option4: "Peacock",
        answer: "Tiger"
    },

    {
        question: "Which is the largest planet in our Solar System?",
        option1: "Earth",
        option2: "Saturn",
        option3: "Jupiter",
        option4: "Neptune",
        answer: "Jupiter"
      },

    {
        question: "How many days are there in a leap year?",
        option1: "365",
        option2: "366",
        option3: "364",
        option4: "367",
        answer: "366"
    },

    {
        question: "Which country is known as the Land of the Rising Sun?",
        option1: "China",
        option2: "Japan",
        option3: "Thailand",
        option4: "South Korea",
        answer: "Japan",
        
    },

    {
        question: "Which gas do plants absorb from the atmosphere?",
        option1: "Oxygen",
        option2: "Nitrogen",
        option3: "Carbon Dioxide",
        option4: "Hydrogen",
        answer: "Carbon Dioxide",
       
    },

    {
        question: "Which is the fastest land animal?",
        option1: "Tiger",
        option2: "Leopard",
        option3: "Horse",
        option4: "Cheetah",
        answer: "Cheetah",
        
    },

    {
        question: "Which is the smallest planet in the Solar System?",
        option1: "Mercury",
        option2: "Mars",
        option3: "Venus",
        option4: "Earth",
        answer: "Mercury",
      
    },

    {
        question: "Who wrote the Indian National Anthem?",
        option1: "Subhas Chandra Bose",
        option2: "Rabindranath Tagore",
        option3: "Mahatma Gandhi",
        option4: "Jawaharlal Nehru",
        answer: "Rabindranath Tagore",
        
    },

    {
        question: "Which festival is known as the Festival of Lights?",
        option1: "Holi",
        option2: "Christmas",
        option3: "Diwali",
        option4: "Eid",
        answer: "Diwali",
        
    },

    {
        question: "What is the largest mammal in the world?",
        option1: "Elephant",
        option2: "Blue Whale",
        option3: "Giraffe",
        option4: "Hippopotamus",
        answer: "Blue Whale",
        
    }

];



const start =document.getElementById("startBtn");
let homepage = document.querySelector(".home");
let container=document.querySelector('.container');
let currentQuestion = 0;
let score = 0;
let interval;
let question = document.getElementById("question");
let option = document.getElementsByClassName("option");
let next = document.getElementById("next");
let quizBox = document.querySelector(".quiz-box");
let resultBox = document.getElementById("resultBox");
let finalScore = document.getElementById("finalScore");
let percentage =document.getElementById("percentage");
let restart = document.getElementById("restart");
let time = 15;
let userAnswers = [];
let timer = document.getElementById("timer");
let questionNumber = document.getElementById("questionNumber");
let progressbar=document.getElementById("progressBar");

function home(){
container.style.display="block";
homepage.style.display="none";
resultBox.style.display="none";
quizBox.style.display="block";

shuffle();
displayQuestion();
}
function displayQuestion(){
    question.innerHTML = questions[currentQuestion].question;
    option[0].innerHTML = questions[currentQuestion].option1;
    option[1].innerHTML = questions[currentQuestion].option2;
    option[2].innerHTML = questions[currentQuestion].option3;
    option[3].innerHTML = questions[currentQuestion].option4;



    questionNumber.innerHTML =
"Question "+(currentQuestion + 1)+" of "+ questions.length;
questionNumber.style.fontWeight = "600";
 time=15;
timer.innerHTML="00."+time;
timer.style.color="yellow";
timer.style.fontSize="20px";
timer.style.fontWeight="900";
starttimer();

    for(let i=0;i<4;i++){
        option[i].disabled = false;
        option[i].style.background = "white";
        option[i].style.color = "black";

    }
    next.disabled=true;    

}


function shuffle(){

    for(let i = questions.length - 1; i > 0; i--){

        let random = Math.floor(Math.random() * (i + 1));

        let temp = questions[i];
        questions[i] = questions[random];
        questions[random] = temp;

    }

}

shuffle();
displayQuestion();




function starttimer(){
    
    clearInterval(interval);
    interval=setInterval(function(){
        time--;
        timer.innerHTML = "00."+time;
        timer.style.color="yellow";
        if(time == 0){
            clearInterval(interval);
            timer.innerHTML="Time Up!";
            timer.style.color="red";
            timer.style.fontSize="13px";
            timeup();
        }

    },1000);

}




function timeup(){
    for(let i=0;i<4;i++){
        option[i].disabled=true;
    }
        for(let i=0;i<4;i++){
        if(option[i].innerHTML == questions[currentQuestion].answer){
        option[i].style.background = "green";
            option[i].style.color = "white";  
            userAnswers[currentQuestion] = "Not Answered";  
        }
    }
    next.disabled=false;

    setTimeout(()=>{
        next.click();
    },3000);
}




for(let i=0;i<4;i++){
    option[i].addEventListener("click",function(){
        next.disabled=false;
        for(let j=0;j<4;j++){

            option[j].disabled = true;

        }

        if(option[i].innerHTML == questions[currentQuestion].answer){
            score++;
            option[i].style.background = "green";
            option[i].style.color = "white";
        }

        else{

            option[i].style.background = "red";
            option[i].style.color = "white";

            for(let j=0;j<4;j++){

                if(option[j].innerHTML == questions[currentQuestion].answer){
                    option[j].style.background = "green";
                    option[j].style.color = "white";
                }

            }

        }
        
        userAnswers[currentQuestion] = option[i].innerHTML;
       
        clearInterval(interval);
    });

}
document.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        if(next.disabled === false){
            next.click();
        }
    }
});






let high=document.getElementById("highScore");
next.addEventListener("click",function(){
    if(currentQuestion < questions.length-1){
        currentQuestion++;
        displayQuestion();
        let progress=((currentQuestion+1)/15)*100;
progressbar.style.width=progress + '%';
        
        
    }

    else{

        quizBox.style.display="none";
        resultBox.style.display="flex";
        finalScore.innerHTML="Your Score : "+ score + "/"+ questions.length;
        let data=Math.round((score/questions.length)*100);
        percentage.innerHTML="percentage :" + data+"%";
        let highScore = localStorage.getItem("highScore");
    if( score > highScore){
        localStorage.setItem("highScore", score);
    }
    high.innerHTML = "High Score : " + localStorage.getItem("highScore");
    
    }

});





restart.addEventListener("click",()=>{
    currentQuestion=0;
    score=0;
    time=15;
    quizBox.style.display="block";
    resultBox.style.display="none";
    shuffle();
    displayQuestion();
});





 let review = document.getElementById("review");
 let reviewbox = document.getElementById("reviewbox");
 let  back= document.getElementById("back");

review.addEventListener("click",function(){
    let result = "";
    for(let i=0;i<questions.length;i++){
       let status = "";
        
        if(userAnswers[i] == questions[i].answer){
            status = '<i class="fa-solid fa-circle-check correct-icon"></i> Correct';
            
            

        }

        else if(userAnswers[i] == "Not Answered"){
            status = '<i class="fa-solid fa-circle-check correct-icon"></i> Not Answered';
            
        }

        else{
            status = '<i class="fa-solid fa-circle-xmark wrong-icon"></i> Wrong';
            
            
        }
        result += `
        <div class="review-card">
            <h2>Question ${i+1}</h2>
            <h3>${questions[i].question}</h3>
            <p >
                <strong>Your Answer:</strong> ${userAnswers[i]}
            </p>
            <p >
                <strong>Correct Answer:</strong> ${questions[i].answer}
            </p>
            <h4>${status}</h4>
        </div>
        
        `;

    }

    reviewbox.innerHTML = result;
    reviewbox.appendChild(back);
    reviewbox.style.display = "block";
    reviewbox.scrollTop = 0;
    resultBox.style.display = "none";
    document.getElementById("hide").style.display="none";
    


});

back.addEventListener("click",function(){
clearInterval(interval);
currentQuestion=0;
score=0;
    reviewbox.style.display = "none";
    resultBox.style.display = "none";
    homepage.style.display="flex";
    container.style.display="none";
})
    
