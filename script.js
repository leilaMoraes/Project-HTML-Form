const email = document.querySelector('.email');
const password = document.querySelector('.password');
const box = document.getElementById('agreement');
const btnEntry = document.querySelector('.entry');
const btnSend = document.getElementById('submit-btn');
const theText = document.querySelector('#textarea');
const counterCha = document.querySelector('#counter');
const savedName = document.querySelector('#input-name');
const savedLastName = document.querySelector('#input-lastname');
const savedEmail = document.querySelector('#input-email');
const savedHouse = document.querySelector('#house');
const savedFamily = document.querySelector('#q1');
const savedSubjects = document.querySelectorAll('.subject');
const savedEvaluation = document.querySelector('#avalia');
const savedComment = document.querySelector('#textarea');
const mainForm = document.querySelector('#main');
const secondForm = document.querySelector('#form-data');

// eslint-disable-next-line func-names
window.onload = function () {
  function fillForm() {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  }
  btnEntry.addEventListener('click', fillForm);

  box.addEventListener('change', () => {
    if (box.checked) {
      btnSend.disabled = false;
      btnSend.classList.add('enable-btn');
    } else {
      btnSend.disabled = true;
      btnSend.classList.remove('enable-btn');
    }
  });
};

function countingCharacters() {
  const count = theText.value.length;
  counterCha.innerHTML = 500 - count;
}

theText.addEventListener('keyup', countingCharacters);

function choosingFamily() {
  const choosed = savedFamily.children;
  for (let index = 0; index < choosed.length; index += 1) {
    if (choosed[index].checked) {
      return choosed[index].value;
    }
  }
}

function choosingSubjects() {
  const selectedsSubjects = [];
  for (let index = 0; index < savedSubjects.length; index += 1) {
    if (savedSubjects[index].checked) {
      selectedsSubjects.push(` ${savedSubjects[index].value}`);
    }
  }
  return `Matérias:${selectedsSubjects}`;
}

function choosingEvaluation() {
  const finalEvaluation = savedEvaluation.children;
  for (let index = 0; index < finalEvaluation.length; index += 1) {
    if (finalEvaluation[index].checked) {
      return finalEvaluation[index].value;
    }
  }
}

function swapDisplay(fill) {
  fill.preventDefault();
  const name = document.querySelector('#savedName');
  name.innerText = `Nome: ${savedName.value} ${savedLastName.value}`;
  const inputedEmail = document.querySelector('#savedEmail');
  inputedEmail.innerText = `Email: ${savedEmail.value}`;
  const choosedHouse = document.querySelector('#choosedHouse');
  choosedHouse.innerText = `Casa: ${savedHouse.value}`;
  const choosedFamily = document.querySelector('#choosedFamily');
  choosedFamily.innerText = `Família: ${choosingFamily()}`;
  const theSubjects = document.querySelector('#selectedSubjects');
  theSubjects.innerText = choosingSubjects();
  const choosedEvaluation = document.querySelector('#evaluation');
  choosedEvaluation.innerText = `Avaliação: ${choosingEvaluation()}`;
  const yourComment = document.querySelector('#comments');
  yourComment.innerText = `Observações: ${savedComment.value}`;
  mainForm.classList.toggle('dontShow');
  secondForm.classList.replace('dontShow', 'show');
}

btnSend.addEventListener('click', swapDisplay);
