const div = document.createElement('div');
const p = document.createElement('p');

function createLi(){
    const li = document.createElement('li');
    li.innerHTML = `<img src="icon.svg" alt="  ">`;
    document.querySelector('.icons ul').appendChild(li);
}
// createLi();