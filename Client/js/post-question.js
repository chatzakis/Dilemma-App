document.getElementById('dilemmaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const question = document.getElementById('question').value;
    const answer1 = document.getElementById('answer1').value;
    const answer2 = document.getElementById('answer2').value;

    const data = {
      question: question,
      answers: [
        { num: 1, answer: answer1 },
        { num: 2, answer: answer2 }
      ]
    };

    fetch('http://localhost:3000/question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      alert('Dilemma submitted successfully! You can enter another!');
      document.getElementById('dilemmaForm').reset();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error submitting dilemma');
    });
  });