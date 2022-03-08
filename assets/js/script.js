var searchIn = document.querySelector('#search-input');
var formatIn = document.querySelector('#format-input');
var searchForm = document.querySelector('#search-form');
var submitBtn = document.querySelector('.btn')
var results = document.querySelector('ul')

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
    var resultsdata = data.results;
    for (let i = 0; i < resultsdata.length; i++) {
        var listItem = document.createElement('p')
        listItem.textContent = resultsdata[i].title
        
        results.appendChild(listItem)
    }


})
}




submitBtn.addEventListener('click', startUp)