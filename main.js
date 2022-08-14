const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const answersArr = ['Tak!', 'Nie.', 'Może.', 'Ciężko powiedzieć...', 'Nie chcesz znać odpowiedzi na to pytanie... ;/']

const shakeBall = () => {
    ball.classList.add('shake-animation');
   setTimeout(checkInput, 1000)
}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        showAnswer();
        error.textContent = ''
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Pytanie musi być zakończone znakiem "?".';
        answer.textContent = ''
    } else {
        error.textContent = 'Musisz zadać jakieś pytanie!';
        answer.textContent = ''
    }
    ball.classList.remove('shake-animation');
}

const showAnswer = () => {

    const number = Math.floor(Math.random() * answersArr.length)
    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
}


ball.addEventListener('click', shakeBall)