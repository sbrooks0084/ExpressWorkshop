// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The best way to find yourself is to serve others.`,
    person: `Mahatma Gandhi`
}, {
    quote: `"Your time is limited, so don't waste it living someone else's life.`,
    person: `Steve Jobs`
}, {
    quote: `"Tell me and I forget. Involve me and I learn.`,
    person: `Benjamin Franklin`
}, {
    quote: `"Helping someone in need is the most selfish thing one can do.`,
    person: `Shannon Brooks`

},];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;

    person.innerText = quotes[random].person;

})