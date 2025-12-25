'use strict';

// write your code here

const secondTh = document.querySelector('tr th:nth-child(2)');

const prevLastThs = document.querySelectorAll('tr th:nth-child(4)');

prevLastThs[0].after(secondTh.cloneNode(true));
prevLastThs[1].after(secondTh.cloneNode(true));

const newPrevLastTds = document.querySelectorAll('tr td:nth-child(4)');
const secondTds = document.querySelectorAll('tr td:nth-child(2)');

const arrayOfsecondTds = [...secondTds];
const arrayOfnewPrevLastTds = [...newPrevLastTds];

for (let i = 0; i < arrayOfnewPrevLastTds.length; i++) {
  arrayOfnewPrevLastTds[i].after(arrayOfsecondTds[i].cloneNode(true));
}
