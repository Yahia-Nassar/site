//[imaginile referetiante sunt din A_learn/Indicatoare_de_informare]

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}


function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        console.log(answer);

        this.score++;
    }

    for(var i = 0; i < quiz.getQuestionIndex().choices.length; i++) {
        var number =this.getQuestionIndex().getCorrectAnswer().charCodeAt(0)-65;
        if (i===number)
            document.getElementById("btn"+ i).style.backgroundColor="green";
        else
            document.getElementById("btn"+ i).style.backgroundColor="red";
        document.getElementById("btn"+ i).disabled=true;
    }
    this.questionIndex++;
    document.getElementById('nxtbtn').disabled = false;
}



Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, textAnswer, choices, answer) {
    this.text = text;
    this.textAnswer = textAnswer;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {

    return this.answer === choice;

}
Question.prototype.getCorrectAnswer= function(){
    return this.answer

}


function populate() {
    if(quiz.isEnded()) {
        document.getElementById('nxtbtn').style.display = 'none';
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;


        // show textAnswer
        var textAnswer = quiz.getQuestionIndex().textAnswer;
        for(var i = 0; i < textAnswer.length; i++) {
            var element = document.getElementById("textAnswer" + i);
            element.innerHTML = textAnswer[i];
        }

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            document.getElementById("btn"+ i).disabled=false;
            guess("btn" + i, choices[i]);

        }

        showProgress();
        for(var i = 0; i < quiz.getQuestionIndex().choices.length; i++) {
            document.getElementById("btn"+ i).style.backgroundColor="#778897";
        }
        document.getElementById('nxtbtn').disabled = true;
    }
};


function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);

    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1  class='result'>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("1.Care dintre urmatoarele indica sfarsit de autostrada?",
        ["<span> <div class='image'> <img  alt='image' src='6.jpg' > A </div> <div class='image'><img  alt='image' src='7.png' > B </div> <div class='image'><img  alt='image' src='18.png' > C </div> </span>",
            "",
            ""],
        ["A", "B","C"],
        "B"),
    new Question("2.Preciza??i ce semnificatie are urmatorul indicator : <br> <div  class='image_q'> <img alt='image' src='73.png' > </div> </br>",
        ["A: Monitorizare trafic",
            "B: Control radar",
            "C: Service auto"],
        ["A", "B","C"],
        "A"),
    new Question("3.Ce semnific?? indicatorul din imagine? <br> <div  class='image_q'> <img alt='image' src='27.png' > </div> </br>",
        ["A: Teren de camping",
            "B: Loc de popas",
            "C: Cabana pentru turisti"],
        ["A", "B","C"],
        "A"),
    new Question("4.Care dintre urmatoarele semnifica drum pentru autovehicule?",
        ["<span> <div class='image'> <img  alt='image' src='14.png' > A </div> <div class='image'><img  alt='image' src='17.jpg' > B </div> <div class='image'><img  alt='image' src='28.png' > C </div> </span>",
            "",
            ""],
        ["A", "B","C"],
        "B"),
    new Question("5.Ce semnifica??ie are indicatorul din imagine? <br> <div  class='image_q'> <img alt='image' src='38.png' > </div> </br>",
         ["A: Zona residentiala",
             "B: Complex de servicii",
             "C: Restaurant"],
        ["A", "B","C"],
        "A") 
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();

