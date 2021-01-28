import { Question } from './question'
import './styles.css'
import { isValid } from './utils'

const form = document.getElementById( 'form' )
const input = form.querySelector( '#question-input' )
const submitBtn = form.querySelector( '#submit' )

// обработчик для кнопки Submit
form.addEventListener('submit', submitFormHandler)
// обработчик для ввода
input.addEventListener('input', () => {
  //скрыть кнопку если ввод недопустимый
  submitBtn.disabled = !isValid(input.value)
})


function submitFormHandler(event) {
  event.preventDefault(); // не перезагружать страницу

  if (isValid(input.value)) { // проверить валидность вопроса
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    }

    submitBtn.disabled = true;
    
    // Async request to server to save question
    Question.create(question).then( () => {
      // очистить поле ввода и отключить проверку на ввод
      input.value = ''
      input.className = ''
      submitBtn.disabled = false
    } )


  }

}