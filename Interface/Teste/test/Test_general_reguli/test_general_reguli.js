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
    new Question("1. Pute??i schimba pozi??ia autovehiculului, dac?? acesta a fost implicat ??ntr-un accident din care a rezultat moartea sau v??t??marea integrit????ii corporale ori a s??n??t????ii unor persoane?",
        ["A: da, cu ??ncuviin??area poli??iei, care cerceteaz?? accidentul",
            "B: da, dac?? persoana v??t??mat?? se poate deplasa singur??",
            "C: nu, p??n?? la sosirea ambulan??ei."],
        ["A", "B","C"],
        "A"),
    new Question("2. Cum pute??i folosi ??n condi??ii optime capacitatea de fr??nare a motorului, atunci c??nd cobor????i o pant?? lung?? ??i ??nclinat???",
    ["A: schimba??i ??ntr-o treapt?? superioar??",
            "B: schimba??i la timp ??ntr-o treapt?? inferioar??",
            "C: dup?? schimbarea vitezei, aduce??i imediat maneta ??n 'punctul mort'"],
        ["A", "B","C"],
        "B"),
    new Question("3. ??n ce condi??ii pot circula pe drumurile publice autovehiculele ??i remorcile?",
        ["A: c??nd au un aspect civilizat",
            "B: c??nd nu dep????esc greutatea ??i gabaritul ??nscrise ??n certificatul de ??nmatriculare",
            "C: c??nd sunt ??n bun?? stare de func??ionare ??i ??ndeplinesc condi??iile tehnice stabilite prin lege"],
        ["A", "B","C"],
        "C"),
    new Question("4.Pe timpul deplas??rii ??ntr-un autoturism pe un drum public este interzis:",
        ["A:s?? fie transporta??i copii de peste 3 ani mai scunzi de 150cm pe scaunul din spate",
            "B: s?? se fumeze ??n timpul mersului",
            "C: ocupan??ii locurilor din fa???? s?? ??in?? ??n bra??e animale"],
        ["A", "B","C"],
        "C"),
    new Question("5.La intersec??iile f??r?? marcaje, conduc??torii auto care vor s?? circule pe direc??ia ??nainte vor ocupa:",
        ["A:  r??ndul din st??nga",
            "B: r??ndul din dreapta",
            "C: oricare dintre r??nduri"],
        ["A", "B","C"],
        "C"),
    new Question("6.Limita maxim?? de vitez?? pe care administratorul drumului public o poate stabili pe anumite sectoare, din interiorul localit????ilor, pentru autovehiculele din categoriile A ??i B, nu poate fi mai mare de:",
        ["A: 50 km/h",
            "B: 80 km/h",
            "C: 110 km/h"],
        ["A", "B","C"],
        "B"),
    new Question("7.Un autovehicul avariat nu mai poate circula dac??:",
        ["A: are elemente de caroserie distrus",
            "B: au trecut mai mult de 30 de zile de la data producerii avariei",
            "C: au trecut mai mult de 3 zile de la constatare"],
        ["A", "B","C"],
        "B"),
    new Question("8.Ce categorii de vehicule au obliga??ia de a folosi luminile de ??nt??lnire pe timp de zi?",
        ["A: autovehiculele care tracteaz?? alte vehicule sau care transport?? produse periculoase",
            "B: autovehiculele care ??nso??esc coloane militare sau transport?? grupuri de persoane",
            "C: ambele variante sunt corecte"],
        ["A", "B","C"],
        "C"),
    new Question("9.Preciza??i dac?? posesorul unui permis de conducere categoria B are permisiunea de a conduce un autoturism cu remorc??:",
        ["A: da, cu condi??ia ca acesta s?? aib?? permis de cel pu??in 3 ani",
            "B: da, dac?? masa remorcii nu dep????e??te 750 kg",
            "C: nu, deoarece pentru o astfel de remorc?? este necesar un permis de conducere categoria BE"],
        ["A", "B","C"],
        "B"),
    new Question("10. Care este rolul marcajelor rezonatoare?",
        ["A: dubleaz?? marcajele conven??ionale ??n zonele periculoase",
            "B: avertizeaz?? conduc??torii de autovehicule c?? dep????esc zona de carosabil marcat?? ??i destinat?? sensului de deplasare",
            "C: avertizeaz?? conduc??torii de autovehicule c?? vor p??trunde ??ntr-o zon?? supravegheat?? cu aparatur?? radar"],
        ["A", "B","C"],
        "B"),
        new Question("11. Ce substan??e au efect asem??n??tor cu cel al alcoolului ??i pot reduce capacitatea de concentrare a unui conduc??tor auto?",
        ["A: condimentele foarte iu??i",
            "B: medicamentele sau substan??ele cu efect psihoactiv",
            "C: cofeina"],
        ["A", "B","C"],
        "B"),
    new Question("12. Este permis?? montarea, de c??tre de??in??torul unui autovehicul, a unui alt avertizor sonor ??n afara celui omologat de c??tre autoritatea competent???",
    ["A:  Regulamentul nu prevede nimic ??n acest sens",
            "B: da, cu condi??ia ca acesta s?? nu fie deranjant din punct de vedere sonor",
            "C: nu"],
        ["A", "B","C"],
        "C"),
    new Question("13. Conduc??torii de autovehicule pot folosi mijloace proprii de detectare a dispozitivelor de m??surare a vitezei?",
        ["A: da",
            "B: nu",
            "C: acest aspect nu este stabilit legal"],
        ["A", "B","C"],
        "A"),
    new Question("14. Ce obliga??ii ave??i dac??, pe drumul pe care circula??i, observa??i evenimente de natur?? a pune ??n pericol siguran??a circula??iei?",
        ["A: s?? semnaliza??i participan??ii la trafic care circul?? din sens opus",
            "B: s?? emite??i semnale acustice",
            "C: s?? sesiza??i cea mai apropiat?? unitate de poli??ie ??n leg??tur?? cu obstacolele care pun ??n pericol siguran??a circula??iei"],
        ["A", "B","C"],
        "C"),
    new Question("15. Dac?? circula??i pe un drum na??ional european (E), v?? este interzis:",
        ["A:  s?? folosi??i pe timpul zilei luminile de ??nt??lnire",
            "B: s?? opri??i pe partea carosabil??",
            "C: s?? dep????i??i"],
        ["A", "B","C"],
        "B"),
    new Question("16. ??n fa??a dvs. s-a produs un accident rutier care este cercetat de poli??ie, iar circula??ia se desf????oar?? anevoios, pe un singur sens. Cum ve??i proceda?",
        ["A: v?? continua??i drumul cu aten??ie, respect??nd indica??iile poli??istului rutier",
            "B:  v?? continua??i drumul cu vitez?? sporit??, pentru a nu bloca traficul rutier",
            "C: reduce??i viteza ??i opri??i ??n locul accidentului, pentru a vedea ce s-a ??nt??mplat"],
        ["A", "B","C"],
        "A"),
    new Question("17. ??n care dintre situa??ii este interzis s?? circula??i pe drumurile publice?",
        ["A:  atunci c??nd certificatul de ??nmatriculare este deteriorat",
            "B: atunci c??nd vehiculul nu este asigurat de r??spundere civil??, ??n caz de pagube materiale produse ter??ilor prin accidente de circula??ie, conform legii",
            "C: atunci c??nd conduc??torul auto nu a pl??tit taxa de folosire a drumurilor publice"],
        ["A", "B","C"],
        "B"),
    new Question("18. Este interzis ca autovehiculele s?? fie echipate cu:",
        ["A: dispozitive antiradar",
            "B: sisteme de naviga??ie ",
            "C: sisteme sonor antifurt"],
        ["A", "B","C"],
        "A"),
    new Question("19. Care sunt vitezele maxime admise pentru subcategoria de autovehicule B1?",
        ["A: 90 km/h pe autostr??zi, 80 km/h pe drumurile expres sau na??ionale europene ??i 70 km/h pe celelalte categorii de drumuri",
            "B: 110 km/h pe autostr??zi, 90 km/h pe drumurile expres sau na??ionale europene ??i 80 km/h pe celelalte categorii de drumuri",
            "C: 130 km/h pe autostr??zi ??i 90 km/h pe celelalte categorii de drumuri"],
        ["A", "B","C"],
        "A"),
    new Question("20. Este permis?? oprirea voluntar?? a autovehiculului ??n tuneluri?",
        ["A: da",
            "B: nu",
            "C: numai dac?? lungimea tunelului dep????e??te 1000 m"],
        ["A", "B","C"],
        "B")

];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
