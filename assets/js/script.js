var searchIn = document.querySelector('#search-input');
var formatIn = document.querySelector('#format-input');
var searchForm = document.querySelector('#search-form');
var submitBtn = document.querySelector('.btn')

var requestUrl = 'https://www.loc.gov/search/?q=baseball&fo=json';

submitBtn.addEventListener('click', startUp)