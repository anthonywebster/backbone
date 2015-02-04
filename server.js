
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));

varBookId = 100;

function findBook (id) {
	
	for (var i = 0; i < books.length; i++) {
		if (books[i].id===id) {
			return books[i];
		}
	}
	return null;
}

function removeBook(id){
	varbookIndex = 0;
	for(var i=0; i<books.length; i++){
		if(books[i].id === id){
			bookIndex = i;
		}
	}
	books.splice(bookIndex, 1);
}


var books = [
{id: 98, author: 'Stephen King', title: 'The Shining', year: 1977},
{id: 99, author: 'George Orwell', title: 1949}];

app.get('/books', function (request, response) {
 
	response.header('Access-Control-Allow-Origin', '*');
	console.log('In GET function ');
	response.json(books);
 
});

app.listen(8080);