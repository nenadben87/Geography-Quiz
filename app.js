
const questionAll = document.querySelector('#question-all');

const nextBtn1 = document.querySelector('#next-btn1');
const nextBtn2 = document.querySelector('#next-btn2');
const nextBtn3 = document.querySelector('#next-btn3');
const nextBtn4 = document.querySelector('#next-btn4');
const nextBtn5 = document.querySelector('#next-btn5');
const nextBtn6 = document.querySelector('#next-btn6');
const nextBtn7 = document.querySelector('#next-btn7');
const nextBtn8 = document.querySelector('#next-btn8');
const nextBtn9 = document.querySelector('#next-btn9');
const nextBtn10 = document.querySelector('#next-btn10');
const quizEndBtn = document.querySelector('#quiz-end-btn');

const question1 = document.querySelector('#question-1');
const question2 = document.querySelector('#question-2');
const question3 = document.querySelector('#question-3');
const question4 = document.querySelector('#question-4');
const question5 = document.querySelector('#question-5');
const question6 = document.querySelector('#question-6');
const question7 = document.querySelector('#question-7');
const question8 = document.querySelector('#question-8');
const question9 = document.querySelector('#question-9');
const question10 = document.querySelector('#question-10');
const quizEnd = document.querySelector('#quiz-end');

const corrAnswerEl = document.querySelector('#correct-answers');
const wrongAnswerEl = document.querySelector('#wrong-answers');

let correctAnswer = 0;
let wrongAnswer = 0;

question1.addEventListener('click',chooseAnswer1);
question2.addEventListener('click',chooseAnswer2);
question3.addEventListener('click',chooseAnswer3);
question4.addEventListener('click',chooseAnswer4);
question5.addEventListener('click',chooseAnswer5);
question6.addEventListener('click',chooseAnswer6);
question7.addEventListener('click',chooseAnswer7);
question8.addEventListener('click',chooseAnswer8);
question9.addEventListener('click',chooseAnswer9);
question10.addEventListener('click',chooseAnswer10);


nextBtn1.addEventListener('click',nextQuestion2);
nextBtn2.addEventListener('click',nextQuestion3);
nextBtn3.addEventListener('click',nextQuestion4);
nextBtn4.addEventListener('click',nextQuestion5);
nextBtn5.addEventListener('click',nextQuestion6);
nextBtn6.addEventListener('click',nextQuestion7);
nextBtn7.addEventListener('click',nextQuestion8);
nextBtn8.addEventListener('click',nextQuestion9);
nextBtn9.addEventListener('click',nextQuestion10);
nextBtn10.addEventListener('click',endOfQuiz);


nextBtn1.disabled = true;
nextBtn2.disabled = true;
nextBtn3.disabled = true;
nextBtn4.disabled = true;
nextBtn5.disabled = true;
nextBtn6.disabled = true;
nextBtn7.disabled = true;
nextBtn8.disabled = true;
nextBtn9.disabled = true;
nextBtn10.disabled = true;

function chooseAnswer1(e) {
  
  if(e.target.className === 'item-hl correct'){
     
    e.target.style.backgroundColor = ' rgb(6, 99, 6)';

    correctAnswer += 1;

    corrAnswerEl.innerHTML = `<p>Correct Answers: ${correctAnswer}</p>`;

    disableDivs();

    nextBtn1.disabled = false;

    } else{
    
    if(e.target.className === 'item-hl wrong'){
    
    e.target.style.backgroundColor = 'rgb(153, 26, 26)';

    wrongAnswer += 1;

    wrongAnswerEl.innerHTML = `<p>Wrong Answers: ${wrongAnswer}</p>`;

    disableDivs();

    nextBtn1.disabled = false;

  }

}

}

function chooseAnswer2(e) {
  
  if(e.target.className === 'item-hl correct'){
     
    e.target.style.backgroundColor = 'rgb(6, 99, 6)';

    correctAnswer += 1;

    corrAnswerEl.innerHTML = `<p>Correct Answers: ${correctAnswer}</p>`;

    disableDivs();

    nextBtn2.disabled = false;

    } else{
    
    if(e.target.className === 'item-hl wrong'){
    
    e.target.style.backgroundColor = 'rgb(153, 26, 26)';

    wrongAnswer += 1;

    wrongAnswerEl.innerHTML = `<p>Wrong Answers: ${wrongAnswer}</p>`;

    disableDivs();

    nextBtn2.disabled = false;

  }

}

}

function chooseAnswer3(e) {
  
  if(e.target.className === 'item-hl correct'){
     
    e.target.style.backgroundColor = 'rgb(6, 99, 6)';

    correctAnswer += 1;

    corrAnswerEl.innerHTML = `<p>Correct Answers: ${correctAnswer}</p>`;

    disableDivs();

    nextBtn3.disabled = false;

    } else{
    
    if(e.target.className === 'item-hl wrong'){
    
    e.target.style.backgroundColor = 'rgb(153, 26, 26)';

    wrongAnswer += 1;

    wrongAnswerEl.innerHTML = `<p>Wrong Answers: ${wrongAnswer}</p>`;

    disableDivs();

    nextBtn3.disabled = false;

  }

}

}

function chooseAnswer4(e) {
  
  if(e.target.className === 'item-hl correct'){
     
    e.target.style.backgroundColor = 'rgb(6, 99, 6)';

    correctAnswer += 1;

    corrAnswerEl.innerHTML = `<p>Correct Answers: ${correctAnswer}</p>`;

    disableDivs();

    nextBtn4.disabled = false;

    } else{
    
    if(e.target.className === 'item-hl wrong'){
    
    e.target.style.backgroundColor = 'rgb(153, 26, 26)';

    wrongAnswer += 1;

    wrongAnswerEl.innerHTML = `<p>Wrong Answers: ${wrongAnswer}</p>`;

    disableDivs();

    nextBtn4.disabled = false;

  }

}

}

function chooseAnswer5(e) {
  
  if(e.target.className === 'item-hl correct'){
     
    e.target.style.backgroundColor = 'rgb(6, 99, 6)';

    correctAnswer += 1;

    corrAnswerEl.innerHTML = `<p>Correct Answers: ${correctAnswer}</p>`;

    disableDivs();

    nextBtn5.disabled = false;

    } else{
    
    if(e.target.className === 'item-hl wrong'){
    
    e.target.style.backgroundColor = 'rgb(153, 26, 26)';

    wrongAnswer += 1;

    wrongAnswerEl.innerHTML = `<p>Wrong Answers: ${wrongAnswer}</p>`;

    disableDivs();

    nextBtn5.disabled = false;

  }

 }

}

function chooseAnswer6(e) {
  
  if(e.target.className === 'item-hl correct'){
     
    e.target.style.backgroundColor = 'rgb(6, 99, 6)';

    correctAnswer += 1;

    corrAnswerEl.innerHTML = `<p>Correct Answers: ${correctAnswer}</p>`;

    disableDivs();

    nextBtn6.disabled = false;

    } else{
    
    if(e.target.className === 'item-hl wrong'){
    
    e.target.style.backgroundColor = 'rgb(153, 26, 26)';

    wrongAnswer += 1;

    wrongAnswerEl.innerHTML = `<p>Wrong Answers: ${wrongAnswer}</p>`;

    disableDivs();

    nextBtn6.disabled = false;

  }

 }

}

function chooseAnswer7(e) {
  
  if(e.target.className === 'item-hl correct'){
     
    e.target.style.backgroundColor = 'rgb(6, 99, 6)';

    correctAnswer += 1;

    corrAnswerEl.innerHTML = `<p>Correct Answers: ${correctAnswer}</p>`;

    disableDivs();

    nextBtn7.disabled = false;

    } else{
    
    if(e.target.className === 'item-hl wrong'){
    
    e.target.style.backgroundColor = 'rgb(153, 26, 26)';

    wrongAnswer += 1;

    wrongAnswerEl.innerHTML = `<p>Wrong Answers: ${wrongAnswer}</p>`;

    disableDivs();

    nextBtn7.disabled = false;

  }

 }

}

function chooseAnswer8(e) {
  
  if(e.target.className === 'item-hl correct'){
     
    e.target.style.backgroundColor = 'rgb(6, 99, 6)';

    correctAnswer += 1;

    corrAnswerEl.innerHTML = `<p>Correct Answers: ${correctAnswer}</p>`;

    disableDivs();

    nextBtn8.disabled = false;

    } else{
    
    if(e.target.className === 'item-hl wrong'){
    
    e.target.style.backgroundColor = 'rgb(153, 26, 26)';

    wrongAnswer += 1;

    wrongAnswerEl.innerHTML = `<p>Wrong Answers: ${wrongAnswer}</p>`;

    disableDivs();

    nextBtn8.disabled = false;

  }

 }

}

function chooseAnswer9(e) {
  
  if(e.target.className === 'item-hl correct'){
     
    e.target.style.backgroundColor = 'rgb(6, 99, 6)';

    correctAnswer += 1;

    corrAnswerEl.innerHTML = `<p>Correct Answers: ${correctAnswer}</p>`;

    disableDivs();

    nextBtn9.disabled = false;

    } else{
    
    if(e.target.className === 'item-hl wrong'){
    
    e.target.style.backgroundColor = 'rgb(153, 26, 26)';

    wrongAnswer += 1;

    wrongAnswerEl.innerHTML = `<p>Wrong Answers: ${wrongAnswer}</p>`;

    disableDivs();

    nextBtn9.disabled = false;

  }

 }

}

function chooseAnswer10(e) {
  
  if(e.target.className === 'item-hl correct'){
     
    e.target.style.backgroundColor = 'rgb(6, 99, 6)';

    correctAnswer += 1;

    corrAnswerEl.innerHTML = `<p>Correct Answers: ${correctAnswer}</p>`;

    disableDivs();

    nextBtn10.disabled = false;

    } else{
    
    if(e.target.className === 'item-hl wrong'){
    
    e.target.style.backgroundColor = 'rgb(153, 26, 26)';

    wrongAnswer += 1;

    wrongAnswerEl.innerHTML = `<p>Wrong Answers: ${wrongAnswer}</p>`;

    disableDivs();

    nextBtn10.disabled = false;

  }

}

}

function nextQuestion2() {

  nextBtn2.disabled = true;

  question1.style.display = 'none';

  question2.style.display = 'block';

  question3.style.display = 'none';

  enableDivs();

}

function nextQuestion3() {

  nextBtn3.disabled = true;

  question1.style.display = 'none';

  question2.style.display = 'none';

  question3.style.display = 'block';

  enableDivs();
}

function nextQuestion4() {
  
  nextBtn4.disabled = true;

  question1.style.display = 'none';

  question3.style.display = 'none';

  question4.style.display = 'block';

  enableDivs();
}

function nextQuestion5() {
  
  nextBtn5.disabled = true;

  question1.style.display = 'none';

  question4.style.display = 'none';

  question5.style.display = 'block';

  enableDivs();
}

function nextQuestion6() {
  nextBtn6.disabled = true;

  question1.style.display = 'none';

  question5.style.display = 'none';

  question6.style.display = 'block';

  enableDivs();
}

function nextQuestion7() {
  nextBtn7.disabled = true;

  question1.style.display = 'none';

  question6.style.display = 'none';

  question7.style.display = 'block';

  enableDivs();
}

function nextQuestion8() {
  nextBtn8.disabled = true;

  question1.style.display = 'none';

  question7.style.display = 'none';

  question8.style.display = 'block';

  enableDivs();
}

function nextQuestion9() {
  nextBtn9.disabled = true;

  question1.style.display = 'none';

  question8.style.display = 'none';

  question9.style.display = 'block';

  enableDivs();
}

 function nextQuestion10() {
   nextBtn10.disabled = true;

   question1.style.display = 'none';

   question9.style.display = 'none';

   question10.style.display = 'block';

   enableDivs();
 }

 function endOfQuiz() {
   question1.style.display = 'none';

   question10.style.display = 'none';

   quizEnd.style.display = 'block';

   corrAnswerEl.style.fontSize = '1.7em';

   wrongAnswerEl.style.fontSize = '1.7em';
 }

function disableDivs() {
  let itemHl = document.querySelectorAll('.item-hl');

  for(let i = 0; i < itemHl.length; i++){
    itemHl[i].disabled = true;
  }
}

function enableDivs() {
  let itemHl = document.querySelectorAll('.item-hl');

  for(let i = 0; i < itemHl.length; i++){
    itemHl[i].disabled = false;
  }
}




