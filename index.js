// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const arrays = [10, 20, 20, 30, 10, 20, 50, 40];

function removeItem(array) {
  const unique = [];
  for (let i = 0; i <array.length; i++) {
    if (unique.includes(array[i]) === false) {
      unique.push(array[i]);
      console.log(unique);
    } else {
    }
  }
  return unique;
}

removeItem(arrays);
console.log(arrays.includes(10))
console.log(arrays.includes(10))
console.log(arrays.includes(10))
console.log(arrays.includes(10))
