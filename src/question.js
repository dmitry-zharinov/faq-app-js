export class Question {
  static create(question) {
    return fetch('https://faq-app-js-default-rtdb.firebaseio.com/questions.json', { 
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json'
      }  
    })
      .then(response => response.json())
      .then(response => {
        question.id = response.name
        return question
      })
      // добавить в localStorage
      .then(addToLocalStorage)
  }
}

function addToLocalStorage(question) {
  localStorage.setItem('questions', JSON.stringify (question))

}