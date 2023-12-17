const array_text_Quotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];
function Quote() {
    // Generate a random index to select a quote from the array_text_Quotes array
    const random = Number.parseInt(Math.random() * array_text_Quotes.length + 1);

    // Set the text content of an HTML element with the id 'quoteOutput' to the selected quote
    document.getElementById('quoteOutput').textContent = `\"${array_text_Quotes[random].quote}\"`;

    // Set the text content of an HTML element with the id 'authorOutput' to the author of the selected quote
    document.getElementByIdr('authorOutput').textContent = `--${array_text_Quotes[random].author}`;
}
