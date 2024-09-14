let currentQuestionIndex = 0;
let questions = [];

// Function to fetch questions from the API
function fetchQuestions() {
  fetch('http://localhost:3000/questions')
    .then(response => response.json())
    .then(data => {
      questions = data;
      if (questions.length > 0) {
        displayQuestion();
      }
    })
    .catch(error => {
        console.error('Error fetching questions:', error);
        displayFeedback('Error fetching questions', 'error');
      });

}

// Function to display the current question
function displayQuestion() {
  if (questions.length === 0) return;  

  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('questionText').innerText = (currentQuestionIndex+1) + ". " + currentQuestion.question;
  document.getElementById('answer1').innerText = currentQuestion.answers[0].answer;
  document.getElementById('answer2').innerText = currentQuestion.answers[1].answer;

  document.getElementById('answer1').style.display = "block";
  document.getElementById('answer2').style.display = "block";
  
  // Set up answer button events
  document.getElementById('answer1').onclick = () => submitAnswer(currentQuestion.answers[0].num);
  document.getElementById('answer2').onclick = () => submitAnswer(currentQuestion.answers[1].num);
}

// Function to submit the selected answer
function submitAnswer(answerNum) {
  const currentQuestion = questions[currentQuestionIndex];
  
  fetch(`http://localhost:3000/questions/${currentQuestion._id}/answer/${answerNum}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log('Answer submitted successfully:', data);
    const feedbackMessage = '<b>' + parseFloat(getQuestionPercentage(answerNum-1)).toFixed(1) + 
      '% </b> of users answered <b>' + currentQuestion.answers[answerNum-1].answer + '</b>';
    displayFeedback(feedbackMessage, 'success');

    // Move to the next question
    currentQuestionIndex = (currentQuestionIndex + 1);
    if (currentQuestionIndex >= questions.length)
        reloadPage()
  })
  .catch(error => {
    console.error('Error submitting answer:', error);
    displayFeedback('Error submitting answer', 'error');
  });
}

// Function to display feedback
function displayFeedback(message, type) {
    const feedbackDiv = document.getElementById('feedback-div');
    const feedbackElement = document.getElementById('feedback');
    const nextBtn = document.getElementById('next');

    document.getElementById('answer1').style.display =  "none";
    document.getElementById('answer2').style.display =  "none";

    feedbackElement.innerHTML = message;
    feedbackDiv.style.display = "block";
    feedbackElement.className = type;

    nextBtn.onclick = () => {
        feedbackDiv.style.display = "none";
        displayQuestion();
    }
}

function getQuestionPercentage(givenAnswer){
    const question = questions[currentQuestionIndex];
    const sum = question.answers[0].count + question.answers[1].count;
    const choiceCount = question.answers[givenAnswer].count;
    if (sum !== 0)
        return choiceCount / sum * 100;
    else
        return 0;
}

function reloadPage(){
    const reloadDiv = document.getElementById('reload-page');
    const reloadBtn = document.getElementById('reload');

    document.getElementById('next').style.display = "none";

    reloadDiv.style.display = "block";

    reloadBtn.onclick = () => {location.reload();}
}

// Initial load
fetchQuestions();

