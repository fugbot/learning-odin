const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redPara = document.createElement('p');
redPara.style.cssText = "color: red";
redPara.textContent = "Hey I’m red!"; 
container.appendChild(redPara);

const blueHeading = document.createElement('h3');
blueHeading.style.cssText = "color: blue";
blueHeading.textContent = "I\’m a blue h3!"; 
container.appendChild(blueHeading);

const divContainer = document.createElement('div');
divContainer.style.border = "solid black";
divContainer.style.backgroundColor = "pink";
container.appendChild(divContainer);

const headerInDiv = document.createElement('h1');
headerInDiv.textContent = "I\'m in a div";
divContainer.appendChild(headerInDiv);

const paraInDiv = document.createElement('p');
paraInDiv.textContent = "ME TOO!";
divContainer.appendChild(paraInDiv);
