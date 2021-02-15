const first = document.getElementById('first');
const second = document.getElementById('second');

first.addEventListener('click', () => {
  console.log(' Click on FIRST =>');
});
second.addEventListener('click', (event) => {
  // event.stopPropagation()
  console.log(' Click on second =>');
});
