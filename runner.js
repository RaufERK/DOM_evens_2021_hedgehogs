// console.log('Hello World!!!', Math.random());
const baseOl = document.getElementById('first_ol');
// console.log('  baseOl = ', baseOl);
const myForm = document.getElementById('formId');
// console.log(' myForm ==', myForm);

myForm.addEventListener('submit', (event) => {
  event.preventDefault(); //отмена перезагрузки страницы
  // console.log(' click --->', myForm.myText.value);

  const newLi = document.createElement('li');
  newLi.innerText = myForm.myText.value;

  baseOl.append(newLi);

  myForm.myText.value = '';
});

const mySelect = document.getElementById('mySelect');

mySelect.addEventListener('change', (event) => {
  console.log(Math.random(), 'DIV CLICK -->', event.target.value.innerText);
  document.body.style.backgroundColor = event.target.value;
});

const myInput = document.querySelector('[name=myText]');
console.log(' myInput =>', myInput);

myInput.addEventListener('focus', (event) => {
  console.log(' focus= ', event.target);
});
