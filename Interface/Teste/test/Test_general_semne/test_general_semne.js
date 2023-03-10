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
    new Question("1.Cum sunt semnalizate benzile de circula??ie reversibil??, care v?? permit s?? continua??i deplasarea?",
        ["A: cu dispozitive de culoare galben?? intermitent??",
            "B: cu semnul ro??u ??n cruce",
            "C: cu semnalul verde de forma unei s??ge??i cu v??rful ??n jos"],
        ["A", "B","C"],
        "C"),
    new Question("2.Preciza??i care dintre indicatoarele de mai jos indic?? o cale rutier?? cu sens unic: <br> <div  class='image'> <img alt='image' src='7533.jpg'  > </div> </br>",
        ["A: indicatorul 1",
            "B: indicatorul 2",
            "C: ambele indicatoare"],
        ["A", "B","C"],
        "C"),
    new Question("3.Ce semnific?? indicatorul din imagine? <br> <div  class='image_q'> <img alt='image' src='3615.jpg' > </div> </br>",
        ["A: Accesul interzis copiilor ne??nso??i??i",
            "B: Trecere obligatorie pentru copii",
            "C: Copii"],
        ["A", "B","C"],
        "C"),
    new Question("4.Ce semnifica??ie are un astfel de marcaj rutier? <br><div  class='image_q'> <img alt='image' src='3687.jpg' > </div> </br>",
        ["A: marcaj pentru spa??ii interzise",
            "B: marcaj pe o band?? de decelerare",
            "C: deviere temporar?? a circula??iei"],
        ["A", "B","C"],
        "B"),
    new Question("5.Ce semnifica??ie are indicatorul din imagine? <br> <div  class='image_q'> <img alt='image' src='3659.jpg' > </div> </br>",
        ["A: urmeaz?? un sector de drum ??ngustat temporar",
            "B: urmeaz?? o intersec??ie cu un drum f??r?? prioritate",
            "C: este interzis?? schimbarea direc??iei de mers la dreapta ??n prima intersec??ie"],
        ["A", "B","C"],
        "B"),
    new Question("6.Ce semnifica??ie are marcajul rutier din imagine? <br> <div  class='image_q'> <img alt='image' src='3589.jpg' > </div> </br>",
        ["A: spa??iu pentru oprirea ??n caz de urgen????",
            "B: marcaj transversal de oprire",
            "C: band?? de circula??ie destinat?? opririi voluntare"],
        ["A", "B","C"],
        "B"),
    new Question("7.Ce obliga??ii revin conduc??torilor la ??nt??lnirea indicatorului? <br> <div  class='image_q'> <img alt='image' src='3438.jpg' > </div> </br>",
        ["A: s?? acorde prioritate vehiculelor care circul?? ??n intersec??ie",
            "B: s?? acorde prioritate de dreapta",
            "C: s?? ocoleasc?? centrul intersec??iei ??i s?? circule c??t mai aproape de marginea str??zii"],
        ["A", "B","C"],
        "A"),
    new Question("8.Care este semnifica??ia indicatorului? <br> <div  class='image_q'> <img alt='image' src='3601.jpg' > </div> </br>",
        ["A: oblig?? la ocolirea prin dreapta a locului unde este instalat",
            "B: oblig?? la schimbarea direc??iei de mers c??tre dreapta",
            "C: oblig?? la folosirea benzii de l??ng?? trotuar"],
        ["A", "B","C"],
        "A"),
    new Question("9.Indicatorul al??turat reprezint??: <br> <div  class='image_q'> <img alt='image' src='9509.jpg' > </div> </br>",
        ["A: panouri succesive pentru curbe deosebit de periculoase",
            "B: panou suplimentar, montat la 150 m fa???? de calea ferat??",
            "C: baliz?? bidirec??ional?? care indic?? ocolirea obstacolului prin st??nga sau prin dreapta"],
        ["A", "B","C"],
        "C"),
    new Question("10.Cum vei proceda la ??nt??lnirea indicatorului ???Limitare de vitez?? 80 km/h???? <br> <div  class='image_q'> <img alt='image' src='3615.jpg' > </div> </br>",
        ["A: nu dep????e??ti viteza maxim?? admis?? pe drumurile na??ionale",
            "B: nu dep????e??ti viteza de 80 km/h",
            "C: circuli cu o vitez?? de peste 80 km/h"],
        ["A", "B","C"],
        "B")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
