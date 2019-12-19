import 'bootstrap';
// import $ from 'jquery';
import '../styles/main.scss';

import './helper/data/genders';
// 9i
import teams from './helper/data/teams';

import characters from './helper/data/character';

console.error('Hello world!');


const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
};


const printCards = (charArray) => {
  let domString = '';
  for (let i = 0; i < charArray.length; i += 1) {
    domString += `
    
    <div class="card col-md-3 text-center" >
            <div class="card-body">
              <h4 class="text-center"> ${charArray[i].name}</h4>
              <img src=${charArray[i].imageUrl} class="characters">`;
    for (let j = 0; j < teams.length; j += 1) {
      if (charArray[i].teamId === teams[j].id) {
        domString += `<h3 class="team text-center"> ${teams[j].name}</h3>`;
      }
    }
    domString += `<p class="description text-center"> ${charArray[i].description}</p>
    <p>${charArray[i].genderId}</P></div>
         </div>
        `;
    printToDom(domString, 'card-place');
  }
};
// $('#card-place').append(printCards(characters.characters));

printCards(characters.characters);


const filterCharacters = (e) => {
  const team = [];
  for (let i = 0; i < characters.characters.length; i += 1) {
    if (characters.characters[i].teamId === e.target.id) {
      team.push(characters.characters[i]);
      e.preventDefault();
    }
  }
  printCards(team);
};

const filterGender = (e) => {
  const gender = [];
  for (let i = 0; i < characters.characters.length; i += 1) {
    if (characters.characters[i].genderId === 'gender0') {
      gender.push(characters.characters[i]);
      e.preventDefault();
    }
  }
  console.log(gender);
  printCards(gender);
};


document.getElementById('team0').addEventListener('click', filterCharacters);
document.getElementById('team1').addEventListener('click', filterCharacters);
document.getElementById('team2').addEventListener('click', filterCharacters);
document.getElementById('gender').addEventListener('click', filterGender);
