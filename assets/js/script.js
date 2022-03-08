var searchIn = document.querySelector('#search-input');
var formatIn = document.querySelector('#format-input');
var searchForm = document.querySelector('#search-form');
var submitBtn = document.querySelector('.btn')

console.log('i made it globally!')

function startUp (event){
event.preventDefault()
var search = searchIn.value
console.log('i made it!')




var requestUrl = 'https://www.loc.gov/search/?q='+search+'&fo=json';
console.log(requestUrl)
fetch (requestUrl).then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data.results)
})
}




submitBtn.addEventListener('click', startUp)